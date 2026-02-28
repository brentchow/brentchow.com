import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="pt-2 pb-4" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="pt-2 pb-3" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="pt-2 pb-2" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className="pt-2 pb-1" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h5 className="pt-2 pb-1" {...props} />,
  img: (props: ImageProps) => (
    <Image
      className="w-full max-w-[600px] max-h-[400px] mx-auto object-contain"
      sizes="(max-width: 600px) 100vw, 600px"
      width={600}
      height={400}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props;

    // Use Next.js Link for internal links, regular anchor for external
    if (href && (href.startsWith('/') || href.startsWith('#'))) {
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    }

    // External links get target="_blank" and rel="noopener noreferrer"
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  },
  code: (props: React.HTMLAttributes<HTMLModElement>) => (
    <code className="text-md font-mono text-neutral-700 dark:text-neutral-400" {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
