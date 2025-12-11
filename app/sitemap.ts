import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/posts';
import { siteConfig } from '@/site-config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { siteUrl } = siteConfig;

  const posts = await getPublishedPosts();
  const postsMap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.5,
  })) as MetadataRoute.Sitemap;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/rss.xml`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...postsMap,
  ];
}
