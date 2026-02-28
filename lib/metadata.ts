import type { Metadata } from 'next';
import type { GenerateMetadataOptions } from '@/types/Metadata';
import { siteConfig } from '../site-config';

export function generateMetadata({
  title,
  description,
  featuredImage,
  canonicalUrl,
}: GenerateMetadataOptions = {}): Metadata {
  const fullTitle =
    title && title !== siteConfig.title ? `${siteConfig.title} | ${title}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      type: 'website',
      images: featuredImage,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description: metaDescription,
      creator: siteConfig.twitterHandle,
      images: featuredImage,
      site: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
