import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/layout';
import Box from 'components/box';
import SEO from 'components/blog/seo';
import styled from 'styled-components';

const blogText = styled.div`
  text-align: left,
  font-family: Times-New-Roman
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Box text-align="left">
        Inspired by Seth Godin, here are some of my riffs and quick thoughts
        about various topics. I&apos;d love to chat more about any of these,
        feel free to reach out.
      </Box>
      <SEO title="All posts" />
      <Box src={blogText}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <article src={blogText} key={node.fields.slug}>
              <div>
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
              </div>
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
