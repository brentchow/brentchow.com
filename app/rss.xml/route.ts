import { getPublishedPosts } from '@/lib/posts';
import { siteConfig } from '@/site-config';

export async function GET(__request: Request) {
  const posts = await getPublishedPosts();
  const { title, description, siteUrl } = siteConfig;
  const copyright = `Copyright © ${new Date().getFullYear()} ${title}`;

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
 <title>${title}</title>
 <description>${description}</description>
 <link>${siteUrl}</link>
 <copyright>${copyright}</copyright>
 ${posts.map(({ frontmatter, slug }) => {
   const url = `${siteUrl}/blog/${slug}`;
   return `<item>
      <title>${frontmatter.title}</title>
      <description>${frontmatter.description}</description>
      <link>${url}</link>
      <pubDate>${frontmatter.publishedAt}</pubDate>
      <guid>${url}</guid>
    </item>`;
 })}
</channel>
</rss>`;

  const headers = new Headers({ 'content-type': 'application/xml' });

  return new Response(rssFeed, { headers });
}
