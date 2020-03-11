import {Link} from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PostItem = ({post}) => {
  const {
    excerpt, featuredImage, slug, title,
  } = post;

  return (
    <Post>
      <Link to={slug}>
        {featuredImage ? <Img alt={title} fluid={featuredImage.childImageSharp.fluid} /> : ''}
      </Link>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

const Title = styled.h2``;
const Excerpt = styled.p``;
const Post = styled.li`
  margin-bottom: 40px;
`;

PostItem.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    featuredImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
    slug: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default PostItem;
