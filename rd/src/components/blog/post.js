import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/blog/seo';
import ToC from './toc';

import './blog.scss';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <ToC headings={post.headings}></ToC>
      <div className="blog">
        <div className="header">
          <div className="title">{post.frontmatter.title}</div>
          <div className="subtitle">{post.frontmatter.description}</div>
        </div>
        <div className="content">
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <div className="foot">
        © {new Date().getFullYear()}, Dev Rangarajan | Rights reserved
      </div>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

// Gatsby Head API - replaces react-helmet
export const Head = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      pathname={post.fields?.slug}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        published
      }
      headings {
        depth
        value
      }
    }
  }
`;
