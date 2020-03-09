import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/layout';

const BlogPost = ({data}) => {
  const {blogPost} = data;
  return (
    <Layout>
      <h1>{blogPost.title}</h1>
      {/* {blogPost.featuredImage && <img alt={blogPost.title} src={blogPost.featuredImage} /> } */}
      <MDXRenderer>{blogPost.body}</MDXRenderer>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.shape({
      body: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query BlogPostQuery($slug: String) {
    blogPost(slug: {eq: $slug}) {
      body
      title
    }
  }
`;

export default BlogPost;
