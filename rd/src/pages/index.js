import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Hero from 'components/hero';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import ProjectDock from '../components/projectdock/projectdock';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

function Index({ data }) {
  const mixpanel = useMixpanel();
  mixpanel.identify();
  return (
    <Layout>
      <Hero />
      <Box>
        <ProjectDock items={data.projectJson.projects} />
      </Box>
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageAndProjectQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
    projectJson {
      projects {
        title
        subtitle
        image {
          publicURL
        }
        link
      }
    }
  }
`;
