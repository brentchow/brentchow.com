export interface MdxFrontmatter {
  title: string;
  featuredImage?: string;
  description?: string;
  published?: boolean;
  tags?: string[];
  keywords?: string[];
}

export interface PostFrontmatter extends MdxFrontmatter {
  publishedAt: string;
}
export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export interface MdxData {
  frontmatter: MdxFrontmatter | PostFrontmatter;
  content: string;
}
