export interface NavLink {
  label: string;
  url: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  /* Strongly recommended for Twitter cards in the format `@username` */
  twitterHandle?: string;
  navLinks: NavLink[];
}
