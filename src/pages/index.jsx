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
          <p>I live in NYC where I build and manage product and engineering teams.</p>
          <p>Previously, I was the Technical Co-founder and Head of Product at <a href="https://www.svrf.com" rel="noopener noreferrer" target="_blank">Svrf</a>——the first search engine for AR and VR——powering over 280M experiences. In July of 2020, <a href="https://poplar.studio/blog/ar-creative-platform-poplar-acquires-svrf-inc/" rel="noopener noreferrer" target="_blank">Svrf was acquired</a>.</p>
          <p>Some other companies I've worked with include: Brud (the creators of <a href="https://variety.com/2020/digital/news/miquela-virtual-influencer-signs-caa-1234599368/" rel="noopener noreferrer" target="_blank">Miquela</a>) and AnyMeeting (acquired).</p>
          <p>I've led product and engineering teams across many forms of media including: 3D capture, photo and 3D content delivery, video streaming, and real-time video communication.</p>
          <p>In 2018, I was recognized by <a href="https://www.forbes.com/30-under-30/2018/media/#578c14f2158b" rel="noopener noreferrer" target="_blank">Forbes 30 Under 30</a>.</p>
          <p>If you're interested in following my journey find me on <a href="https://www.instagram.com/brentchow" rel="noopener noreferrer" target="_blank">Instagram</a>.</p>
        </Layout>
      );
    }}
  />
);

export default Index;
