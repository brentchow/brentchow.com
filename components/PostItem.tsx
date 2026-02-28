import Link from 'next/link';
import type { Post } from '@/types/Mdx';

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, description } = frontmatter;

  return (
    <li className="mb-10 list-none border-b border-neutral-100 dark:border-neutral-700">
      <Link
        href={`/blog/${slug}`}
        className="text-neutral-900! dark:text-neutral-200! hover:text-neutral-600! hover:dark:text-neutral-400! no-underline!"
      >
        <h2 className="text-md leading-snug">{title}</h2>
        {description && <p className="text-sm">{description}</p>}
      </Link>
    </li>
  );
}
