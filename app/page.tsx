import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/MdxComponents';
import { getMdxData } from '@/lib/mdx';
import { generateMetadata } from '@/lib/metadata';
import { siteConfig } from '@/site-config';

const { frontmatter, content } = await getMdxData('content/homepage.mdx');

export const metadata = generateMetadata({
  title: siteConfig.title,
  description: frontmatter.description,
  featuredImage: frontmatter.featuredImage,
});

export default function HomePage() {
  const { featuredImage } = frontmatter;
  const { title } = siteConfig;

  return (
    <>
      {featuredImage && (
        <Image
          src={featuredImage}
          alt={title}
          width={300}
          height={400}
          className="w-[300px] mx-auto py-4"
          priority
        />
      )}
      <div className="font-mono prose prose-lg max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </>
  );
}
