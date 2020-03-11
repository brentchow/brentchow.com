import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';


import {Layout, SEO} from '../components';

const Index = (__props) => (
  <StaticQuery
    query={graphql`
      query HeroImageQuery {
        imageSharp(fixed: {originalName: {eq: "brent-chow.jpg"}}) {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={({imageSharp}) => {
      const {fluid: featuredImgFluid} = imageSharp;

      return (
        <Layout>
          <SEO
            description="A personal blog."
            title="Personal blog"
          />
          <Img alt="Brent Chow" fluid={featuredImgFluid} />
          <h2>Hello, my name is Brent.</h2>
          <p>I live in NYC. I'm the co-founder of <a href="https://www.svrf.com" rel="noopener noreferrer" target="_blank">Svrf</a> where I lead the product and engineering team. At Svrf we are bringing 3D into people's daily lives.</p>
          <p>In 2018, I was honored to be on the <a href="https://www.forbes.com/30-under-30/2018/media/#578c14f2158b" rel="noopener noreferrer" target="_blank">Forbes list of 30 Under 30</a>.</p>
          <p>If you're interested in following my journey find me on <a href="https://www.instagram.com/brentchow" rel="noopener noreferrer" target="_blank">Instagram</a>.</p>
        </Layout>
      );
    }}
  />
);

export default Index;
