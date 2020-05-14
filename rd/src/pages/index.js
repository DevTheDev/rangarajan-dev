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
    <Box>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</Box>
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
