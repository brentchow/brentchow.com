# 🙋‍♂️ A Personal Website

This website is built with [Next.js](https://nextjs.org/) and uses MDX for content management. It has built in support for SEO including `robots.txt` and dynamic `sitemap.xml`, and LLM optimization with a dynamic `LLMs.txt` file. It also includes support for RSS feeds via a dynamic `rss.xml`.

## 🏗️ Development

### Dependencies

1. Node.js (I suggest using [NVM](https://github.com/nvm-sh/nvm) to manage your Node.js versions)
2. [Yarn](https://yarnpkg.com/getting-started/install)
3. [Vercel CLI](https://vercel.com/docs/cli) (for deployment)

### Getting Started

1. Install dependencies:

```shell
yarn install
```

<!-- markdownlint-disable-next-line MD029 -->
2. Start the development server:

```shell
yarn dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Customization

1. Edit your site defaults using the `./site-config.ts` file, including your navigation links
2. Customize content in the `./content` directory including:
   1. Homepage - `/homepage.mdx`
   2. Press Page - `/press.mdx`
   3. Blog Content - `/posts/[post-slug].mdx`
3. Setup your environment variables for Google Analytics and/or Google Tag Manager. There's an example at `.env.example`

### Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `content/` - MDX content files (posts, pages)
- `lib/` - Utility functions (MDX parsing, post management, metadata)
- `mdx-components.tsx` - Custom MDX component mappings
- `types/` - TypeScript type definitions

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with `next-mdx-remote`
- **Linting**: Biome
- **Hosting**: Vercel Hosting

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run Biome linter
- `yarn lint:fix` - Fix linting issues automatically
- `yarn typecheck` - Run TypeScript type checking
- `yarn deploy` - Build and deploy to Vercel

## 🚀 Deployment

This project is hosted using Vercel Hosting.

### Setup Deployments to Vercel

To setup deployments on Vercel use the Vercel CLI tool.

```shell
npm i -g vercel
```

Then run the `vercel` command to connect to your Vercel account and deploy.

### Auto-deployments

Auto-deployments are triggered when a push occurs on the `main` branch. This is managed by Vercel's integration

### Manual deployments

```shell
yarn deploy
```

This will build the Next.js application and deploy it to Vercel Hosting.

## Todo

- [] [MDX support for GitHub flavored markdown (GFM)](https://mdxjs.com/guides/gfm/)
- [] [MDX support for Syntax Highlighting](https://mdxjs.com/guides/syntax-highlighting/)
- [] [MDX support for embeds](https://mdxjs.com/guides/embed/)
- [] Pagination support for blog posts
- [] Consider adding CMS integration instead of using MDX
