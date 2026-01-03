import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const footerStyle = {
  display: 'none',
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
      <div style={footerStyle}> Some images from icons8.com </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
