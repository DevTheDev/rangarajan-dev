import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/layout';
import Box from 'components/box';
import SEO from 'components/blog/seo';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Box>
        Inspired by Seth Godin, these are some riffs about different things in
        my life.
      </Box>
      <SEO title="All posts" />
      <Box>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: 1 / 4,
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Box>
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
