import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/layout';
import SEO from 'components/blog/seo';

import '../styles/blog-main-page.scss';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Dev Rangarajan's essays and riffs." />
      <div className="description">
        A collection of random riffs and semi processed thoughts. Generally more
        in depth than a tweet. Always happy to chat about any of these ideas -
        feel free to reach out.
      </div>
      <div className="riffs">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article className="post" key={node.fields.slug}>
              <div>
                <Link to={node.fields.slug}>{title}</Link>
                <div className="date">{node.frontmatter.date}</div>
              </div>
              <div className="teaser">
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};
BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogIndex;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(blog)/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          headings {
            depth
            value
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
