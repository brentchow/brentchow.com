import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MdxComponents';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { getAdjacentPosts, getPostBySlug } from '@/lib/posts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return generatePageMetadata({ title: 'Post Not Found' });
  }

  return generatePageMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    canonicalUrl: post.frontmatter.canonicalUrl,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const { title, featuredImage } = frontmatter;
  const { next, previous } = await getAdjacentPosts(post.slug);

  return (
    <>
      <h1 className="font-sans pt-4 leading-snug">{title}</h1>
      {featuredImage && (
        <Image
          src={featuredImage}
          alt={title}
          width={600}
          height={400}
          className="w-full leading-0 py-4"
        />
      )}
      <div className="font-mono prose prose-lg max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
      {(next || previous) && (
        <nav className="mt-10 pt-10 border-t border-gray-300 dark:border-gray-700">
          <div className="flex justify-between">
            {previous ? (
              <Link href={`/blog/${previous.slug}`}>← {previous.frontmatter.title}</Link>
            ) : (
              <div />
            )}
            {next && <Link href={`/blog/${next.slug}`}>{next.frontmatter.title} →</Link>}
          </div>
        </nav>
      )}
    </>
  );
}
