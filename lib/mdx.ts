import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import type { MdxData, MdxFrontmatter, PostFrontmatter } from '@/types/Mdx';

/** Get MDX data from a relative file path */
export async function getMdxData(relativeFilePath: string): Promise<MdxData> {
  const fullPath = join(process.cwd(), relativeFilePath);
  return await parseMDX(fullPath);
}

/**
 * Parse an MDX file and extract frontmatter and content
 */
export async function parseMDX(filePath: string): Promise<MdxData> {
  const fileContents = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as MdxFrontmatter | PostFrontmatter,
    content,
  };
}

/**
 * Generate a slug from a file path
 * Example: content/posts/hello-world.mdx -> /hello-world/
 */
export function generateSlugFromPath(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';
  const slug = fileName.replace(/\.(mdx|md)$/, '');
  // Ensure slug starts with / and ends with /
  return `/${slug}/`;
}
