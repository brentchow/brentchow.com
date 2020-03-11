import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';

const BlogPost = ({data}) => {
  const {blogPost} = data;

  if (!blogPost) {
    return '';
  }

  const {body, featuredImage, title} = blogPost;

  return (
    <Layout>
      <h1>{title}</h1>
      {featuredImage && <Img alt={title} fluid={featuredImage.childImageSharp.fluid} /> }
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      body: PropTypes.string,
      featuredImage: PropTypes.any,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query BlogPostQuery($slug: String) {
    blogPost(slug: {eq: $slug}) {
      body
      title
      featuredImage {
        absolutePath
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default BlogPost;
