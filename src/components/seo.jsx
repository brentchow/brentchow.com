import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = ({
  description, lang, meta, title,
}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            description
          }
        }
      }
    `,
  );

  const {siteMetadata} = site;
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          // content: siteMetadata.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      title={title}
      titleTemplate={`${siteMetadata.title} | %s`}
    />
  );
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
