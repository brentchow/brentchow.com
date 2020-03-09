import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PostItem = ({post}) => (
  <li>
    <Link to={post.slug}>
      <Title>{post.title}</Title>
    </Link>
    <Excerpt>{post.excerpt}</Excerpt>
  </li>
);

const Title = styled.h2``;
const Excerpt = styled.p``;

PostItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default PostItem;
