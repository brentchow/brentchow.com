import {StaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

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
          <Justified>
            <h2>Hello, my name is Brent.</h2>
            <p>
              I live in NYC where I'm a product leader at the intersection of technology and creativity.
            </p>
            <p>
              I'm passionate about building and supporting cross-functional teams driven by great product strategy. Over
              the past 8+ years, I've led teams focusing on areas of new media including video streaming, 3D, 360
              photos, RTC, and new media developer tools.
            </p>
            <p>
              In 2016, I co-founded <a href="https://www.svrf.com" rel="noopener noreferrer" target="_blank">Svrf</a>——the
              first search API for 3D face filters——where I led the product and engineering team. We worked with
              high-profile brands including Snapchat, GIPHY, Nicki Minaj, Cardi B, Katy Perry, MTV, Lionsgate, and
              Rebecca Minkoff. In July of 2020, <a href="https://poplar.studio/blog/ar-creative-platform-poplar-acquires-svrf-inc/" rel="noopener noreferrer" target="_blank">Svrf was acquired</a>.
            </p>
            <p>
              I've been a people manager for 4+ years, and I deeply enjoy supporting people's journeys and growth. My
              teams are known to deliver on a lean, iterative product release cycle—consistently delivering results with
              a proven track record.
            </p>
            <p>
              Some other companies I've worked with include: Brud (the creators of <a href="https://variety.com/2020/digital/news/miquela-virtual-influencer-signs-caa-1234599368/" rel="noopener noreferrer" target="_blank">Miquela</a>) and AnyMeeting (acquired).
            </p>
            <p>
              In 2018, I was recognized by <a href="https://www.forbes.com/30-under-30/2018/media/#578c14f2158b" rel="noopener noreferrer" target="_blank">Forbes 30 Under 30</a>.
            </p>
            <p>
              If you're interested in following my journey find me on <a href="https://www.instagram.com/brentchow" rel="noopener noreferrer" target="_blank">Instagram</a>.
            </p>
          </Justified>
        </Layout>
      );
    }}
  />
);

const Justified = styled.div({
  'text-align': 'justify',
});

export default Index;
