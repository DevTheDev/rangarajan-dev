import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from 'components/blog/bio';
import Layout from 'components/layout';
import SEO from 'components/blog/seo';
import TextBox from 'components/textbox';
import Title from 'components/title';
import Box from 'components/box';

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <Box>
          <Title as="h3" size="large">
            {post.frontmatter.title}
          </Title>
          <p
            style={{
              display: 'block',
              marginBottom: 10,
            }}
          >
            {post.frontmatter.date}
          </p>
        </Box>
        <TextBox>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </TextBox>
      </article>
    </Layout>
  );
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
