import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// import Bio from 'components/blog/bio';
import Layout from 'components/layout';
import SEO from 'components/blog/seo';
import TextBox from 'components/textbox';
import Box from 'components/box';

import './blog.scss';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog">
        <div className="header">
          <div className="title">{post.frontmatter.title}</div>
          <div className="subtitle">{post.frontmatter.description}</div>
          <div className="date">{post.frontmatter.date}</div>
        </div>
        <div className="content">
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <div className="foot">© {new Date().getFullYear()}, Dev Rangarajan</div>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isrequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteTitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        published
      }
    }
  }
`;
