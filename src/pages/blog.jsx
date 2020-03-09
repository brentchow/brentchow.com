import {graphql, StaticQuery} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import {Layout, PostItem} from '../components';

const BlogIndex = (__props) => (
  <StaticQuery
    query={graphql`
      query BlogIndexQuery {
        allMdxBlogPost(sort: {fields: date, order: DESC}) {
          nodes {
            excerpt
            id
            slug
            title
          }
        }
      }
    `}
    render={({allMdxBlogPost}) => {
      const {nodes: posts} = allMdxBlogPost;

      return (
        <Layout>
          <Posts>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
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

export default BlogIndex;
