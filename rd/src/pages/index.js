import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Helmet from 'react-helmet';
import favicon from '../../content/favicon/favicon.ico';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Box>
      <Title as="h2" size="large">
        Hi, I&#39;m Dev.
      </Title>
    </Box>
    <Box>
      <Title>
        Here&#39;s a little about me and what I&#39;m working on. Feel free to
        check out&nbsp;
        <a href="https://www.agrarian.design">agrarian.design</a>
        &nbsp;my current focus.
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`;
