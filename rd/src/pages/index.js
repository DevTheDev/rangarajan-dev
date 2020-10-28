import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Helmet from 'react-helmet';
import favicon from '../../content/favicon/favicon.ico';
import { graphql } from 'gatsby';
import Typing from 'react-typing-animation';
import ProjectDock from '../components/projectdock/projectdock';

const Index = ({ data }) => (
  <Layout>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Box>
      <Title as="h2" size="large">
        Hi, I&#39;m
        <div className="break"></div>
        <Typing speed={50}>
          Dev
          <Typing.Backspace count={3} delay={2800} speed={50} />
          <Typing.Speed ms={100} />
          a climate optimist.
          <Typing.Backspace count={19} delay={2800} speed={50} />
          <Typing.Speed ms={100} />
          a digital marketer.
          <Typing.Backspace count={19} delay={2800} speed={50} />
          <Typing.Speed ms={100} />
          a full stack developer.
          <Typing.Backspace count={23} delay={2800} speed={50} />
          <Typing.Speed ms={100} />
          Dev.
        </Typing>
      </Title>
    </Box>
    <Box>
      <ProjectDock items={data.projectJson.projects} />
    </Box>
  </Layout>
);

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
          childImageSharp {
            fluid(quality: 10) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        link
      }
    }
  }
`;
