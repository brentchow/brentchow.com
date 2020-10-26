import {graphql, StaticQuery} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import {Layout, PostItem, SEO} from '../components';

const BlogIndex = (__props) => (
  <StaticQuery
    query={graphql`
      query BlogIndexQuery {
        allMdxBlogPost(sort: {fields: date, order: DESC}, filter: {published: {eq: true}}) {
          nodes {
            excerpt
            id
            slug
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
      }
    `}
    render={({allMdxBlogPost}) => {
      const {nodes: posts} = allMdxBlogPost;

      return (
        <Layout>
          <SEO title="Words" />
          <Posts>
            {posts.length > 0
              ? posts.map((post) => (<PostItem key={post.id} post={post} />))
              : <EmptyState>Writing... check back later.</EmptyState>}
          </Posts>
        </Layout>
      );
    }}
  />
);

const Posts = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const EmptyState = styled.p`
  margin-top: 40px;
`;

export default BlogIndex;
