module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/assets/images`,
      },
    },
    'gatsby-transformer-remark',
  ],
  // Customize your site metadata:
  siteMetadata: {
    author: 'Brent Chow',
    title: 'Brent Chow',
    description: 'A personal blog.',
    social: {
      github: {
        url: 'https://github.com/brentchow',
      },
      instagram: {
        url: 'https://www.instagram.com/brentchow',
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/brentchow/',
      },
      twitter: {
        url: 'https://twitter.com/hellobrent',
      },
    },
  },
};
