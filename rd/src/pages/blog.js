import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Blog = ({ data }) => (
  <Layout>
    <Head pageTitle={data.blogJson.title} />
    <Box>
      <div dangerouslySetInnerHTML={{__html: data.blogJson.content.childMarkdownRemark.html,}}
      />
    </Box>
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    blogJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
