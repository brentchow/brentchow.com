import type { SiteConfig } from '@/types/SiteConfig';

export const siteConfig: SiteConfig = {
  title: 'Brent Chow',
  description:
    'Brent Chow is a product leader with 10+ years building zero-to-one products. 3 of 5 startups acquired. Forbes 30 Under 30. Former UP.Labs, BCG Digital Ventures, Svrf (acquired), Techstars NYC.',
  siteUrl: 'https://www.brentchow.com',
  navLinks: [
    {
      label: 'Words',
      url: '/blog',
    },
    {
      label: 'Images',
      url: 'https://www.instagram.com/brentchow',
      target: '_blank',
    },
    {
      label: 'Resume',
      url: 'https://www.linkedin.com/in/brentchow/',
      target: '_blank',
    },
    {
      label: 'Code',
      url: 'https://github.com/brentchow',
      target: '_blank',
    },
    {
      label: 'Press',
      url: '/press',
    },
  ],
};
