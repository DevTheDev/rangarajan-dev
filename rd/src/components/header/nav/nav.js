import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <a href="https://linkedin.com/in/dev-rangarajan" rel="noopener noreferrer" target="_blank">LinkedIn</a>
      </li>
      <li>
        <a href="https://github.com/DevTheDev" rel="noopener noreferrer" target="_blank">GitHub</a>
      </li>

    </ul>
  </Container>
);

export default Nav;
