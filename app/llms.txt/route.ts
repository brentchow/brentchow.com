import { getMdxData } from '@/lib/mdx';
import { getPublishedPosts } from '@/lib/posts';
import { siteConfig } from '@/site-config';

export async function GET(__request: Request) {
  const posts = await getPublishedPosts();
  const { title, description, siteUrl, navLinks } = siteConfig;
  const { content, frontmatter } = await getMdxData('content/homepage.mdx');

  const llmsTxt = `# ${title}

> ${frontmatter.description || description}

${content}
${
  posts.length > 0 &&
  `

## Blog Posts

${posts
  .map(({ frontmatter, slug }) => {
    const url = `${siteUrl}/blog/${slug}`;
    return `- [${frontmatter.title}](${url}): ${frontmatter.description || 'No description'}`;
  })
  .join('\n')}
`
}

## Resources

- [RSS Feed](${siteUrl}/rss.xml): Subscribe to blog updates
- [Sitemap](${siteUrl}/sitemap.xml): Complete site structure
- [Blog](${siteUrl}/blog): All blog posts
- [Press](${siteUrl}/press): Press mentions and coverage

${
  navLinks.length > 0 &&
  `
## Links

${navLinks.map(({ label, url }) => `- [${label}](${url})`).join('\n')}`
}
`;

  const headers = new Headers({ 'content-type': 'text/plain; charset=utf-8' });

  return new Response(llmsTxt, { headers });
}
