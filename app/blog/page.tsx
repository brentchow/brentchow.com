import PostItem from '@/components/PostItem';
import { generateMetadata } from '@/lib/metadata';
import { getPublishedPosts } from '@/lib/posts';

export const metadata = generateMetadata({
  title: 'Words',
  description:
    'Writings and musings from Brent Chow on all things product, startup, and venture building.',
});

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-4 pt-4 px-4 sm:px-0">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 font-mono">Writing... check back later.</p>
      )}
    </>
  );
}
