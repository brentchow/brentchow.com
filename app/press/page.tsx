import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MdxComponents';
import { getMdxData } from '@/lib/mdx';
import { generateMetadata } from '@/lib/metadata';
import { siteConfig } from '@/site-config';

const { frontmatter, content } = await getMdxData('content/press.mdx');

export const metadata = generateMetadata({
  title: `${siteConfig.title} | Press`,
  description: frontmatter.description,
  featuredImage: frontmatter.featuredImage,
});

export default function PressPage() {
  return (
    <div className="font-mono prose prose-lg max-w-none">
      <MDXRemote source={content} components={mdxComponents} />
    </div>
  );
}
