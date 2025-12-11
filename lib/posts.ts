import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { Post } from '@/types/Mdx';
import { parseMDX } from './mdx';

const POSTS_DIRECTORY = join(process.cwd(), 'content/posts');

// TODO: pagination support
/**
 * Get all posts from the filesystem
 */
export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await readdir(POSTS_DIRECTORY);
  const mdxFiles = fileNames.filter((name) => name.endsWith('.mdx') || name.endsWith('.md'));

  const posts = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const filePath = join(POSTS_DIRECTORY, fileName);
      const mdxData = await parseMDX(filePath);

      return {
        ...mdxData,
        slug: fileName.replace(/\.(mdx|md)$/, ''),
      };
    }),
  );

  return posts as Post[];
}

/**
 * Get all published posts, sorted by date (newest first)
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const published = allPosts.filter((post) => post.frontmatter.published !== false);
  return sortPostsByDate(published);
}

/**
 * Get a single post by file name (without extension)
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Try .mdx first
    const mdxPath = join(POSTS_DIRECTORY, `${slug}.mdx`);
    const mdxData = await parseMDX(mdxPath);

    // If the post is not published, return null
    if (mdxData.frontmatter.published === false) return null;

    return {
      ...mdxData,
      slug,
    } as Post;
  } catch {
    // Try .md if .mdx doesn't exist
    try {
      const mdPath = join(POSTS_DIRECTORY, `${slug}.md`);
      const mdxData = await parseMDX(mdPath);

      // If the post is not published, return null
      if (mdxData.frontmatter.published === false) return null;

      return {
        ...mdxData,
        slug,
      } as Post;
    } catch {
      return null;
    }
  }
}

/**
 * Get the next and previous posts for navigation
 */
export async function getAdjacentPosts(currentFileName: string): Promise<{
  next: Post | null;
  previous: Post | null;
}> {
  const published = await getPublishedPosts();
  const normalizedCurrentFileName = currentFileName.replace(/\.(mdx|md)$/, '');
  const currentIndex = published.findIndex((post) => {
    return post.slug === normalizedCurrentFileName;
  });

  if (currentIndex === -1) {
    return { next: null, previous: null };
  }

  return {
    next: currentIndex > 0 ? published[currentIndex - 1] : null,
    previous: currentIndex < published.length - 1 ? published[currentIndex + 1] : null,
  };
}

/**
 * Sort posts by date (newest first)
 */
function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt).getTime();
    const dateB = new Date(b.frontmatter.publishedAt).getTime();
    return dateB - dateA; // Descending order (newest first)
  });
}
