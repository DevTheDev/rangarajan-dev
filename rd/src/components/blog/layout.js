import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ title, children }) => {
  let header;

  header = (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          color: 'inherit',
        }}
        to={'/'}
      >
        {title}
      </Link>
    </h3>
  );
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 24,
        padding: `${1.5} ${3 / 4}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
