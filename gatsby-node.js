/**
 * Based on https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-theme-blog-core/gatsby-node.js
 */
const {urlResolve, createContentDigest} = require('gatsby-core-utils');
const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info,
) => {
  const type = info.schema.getType('Mdx');
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

exports.createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions;

  createTypes(`interface BlogPost @nodeInterface {
      id: ID!
      title: String!
      body: String!
      slug: String!
      date: Date! @dateformat
      tags: [String]!
      keywords: [String]
      featuredImage: File
      excerpt: String!
  }`);

  createTypes(
    schema.buildObjectType({
      name: 'MdxBlogPost',
      fields: {
        id: {type: 'ID!'},
        title: {
          type: 'String!',
        },
        slug: {
          type: 'String!',
        },
        date: {type: 'Date!', extensions: {dateformat: {}}},
        tags: {type: '[String]!'},
        keywords: {type: '[String]!'},
        featuredImage: {type: 'File'},
        excerpt: {
          type: 'String!',
          args: {
            pruneLength: {
              type: 'Int',
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough('excerpt'),
        },
        body: {
          type: 'String!',
          resolve: mdxResolverPassthrough('body'),
        },
      },
      interfaces: ['Node', 'BlogPost'],
    }),
  );
};

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = async ({
  actions,
  createNodeId,
  getNode,
  node,
}) => {
  const {createNode, createParentChildLink} = actions;

  const basePath = '/';
  const contentPath = 'posts';

  // Make sure it's an MDX node
  if (node.internal.type !== 'Mdx') {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === 'Mdx' && source === contentPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      });

      slug = urlResolve(basePath, filePath);
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, '/');
    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
      keywords: node.frontmatter.keywords || [],
      featuredImage: node.frontmatter.featuredImage || '',
    };

    const mdxBlogPostId = createNodeId(`${node.id} >>> MdxBlogPost`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxBlogPostId,
      parent: node.id,
      children: [],
      internal: {
        type: 'MdxBlogPost',
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: 'Mdx implementation of the BlogPost interface',
      },
    });

    createParentChildLink({parent: node, child: getNode(mdxBlogPostId)});
  }
};


const postTemplate = path.resolve('./src/pages/post-template.jsx');

// Create blog posts pages.
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return graphql(`{
    allBlogPost(
      sort: { fields: date, order: DESC }
      limit: 1000
    ) {
      nodes {
        id
        slug
      }
    }
  }`).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const {allBlogPost} = result.data;
    const posts = allBlogPost.nodes;

    if (posts.length) {
      posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;
        const {id, slug} = post;

        createPage({
          path: slug,
          component: postTemplate,
          context: {
            id,
            next,
            previous,
            slug,
          },
        });
      });
    }

    return null;
  });
};
