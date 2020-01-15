import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title>
        {data.portfolioJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Link to="agrarian">Project Agrarian</Link>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query portfolioQuery {
    portfolioJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
