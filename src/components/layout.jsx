import {Link} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import 'typeface-david-libre';
import 'typeface-inconsolata';

import '../styles/layout.scss';

const Layout = ({children}) => (
  <Container>
    <Header>
      <Title>
        <Link to="/">Brent Chow</Link>
      </Title>
      <Navigation>
        <NavItem>
          <Link to="/blog">Words</Link>
        </NavItem>
        <NavItem>
          <a href="https://www.instagram.com/brentchow" rel="noopener noreferrer" target="_blank">Images</a>
        </NavItem>
      </Navigation>
    </Header>
    {children}
    <Footer>
      <p>&copy; {new Date().getFullYear()} Brent Chow</p>
    </Footer>
  </Container>
);

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;

  & a {
    color: #000;
  }
`;

const Navigation = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding-right: 20px;

  &:last-child {
    padding: 0;
  }
`;

const Footer = styled.footer`
  color: #c0c0c0;
  font-size: 0.8em;
  margin-top: 40px;
`;

export default Layout;
