import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledContentCenterWrapper } from 'components/SharedStyledComponents';
import ArtDirectedFullBackground from 'components/backgroundArt';
import Img from 'gatsby-image';
// import BgImage from 'components/BgImage';
import { graphql } from 'gatsby';

const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
  max-width: 800px;
`;

const Agrarian = ({ data }) => (
  <div style={{ border: 'none' }}>
    <div style={{ border: 'none' }}>
      {' '}
      {/*TODO: Get Rid of the border, need to make a special class for it*/}
      <ArtDirectedFullBackground
        desktop={data.agrarianJson.plate.childImageSharp.fluid}
      >
        <StyledCenterWrapper>
          <h1>this is agrarian.</h1>{' '}
          {/*TODO: Fix formatting here so this looks proper*/}
          <h1>connecting humans to intentional food</h1>
        </StyledCenterWrapper>
      </ArtDirectedFullBackground>
    </div>
    <Img fluid={data.agrarianJson.plate.childImageSharp.fluid} />
    <h1> our stories </h1>
    {/*TODO: Put links to all 3 projects here as agrarian cards*/}
  </div>
);

Agrarian.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Agrarian;

export const query = graphql`
  query AgrarianQuery {
    agrarianJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      farm {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      plate {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
