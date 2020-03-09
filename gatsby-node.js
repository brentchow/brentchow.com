const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  const blogPost = path.resolve('./src/templates/post.jsx');
  return graphql(
    `
      {
        allMdxBlogPost(
          sort: { fields: date, order: DESC }
          limit: 1000
        ) {
          nodes {
            slug
          }
        }
      }
    `,
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdxBlogPost.nodes;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
