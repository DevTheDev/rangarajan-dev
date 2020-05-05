import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';
import { StyledFullScreenWrapper } from 'components/SharedStyledComponents';

/**
 * In this functional component a fullscreen <BackgroundImage /> may be created
 * with art-directed images.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const ArtDirectedFullBackground = ({
  className,
  children,
  desktopImagePath,
  mobileImagePath,
}) => {
  const { desktop, small } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "images/farm.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        small: file(relativePath: { eq: "images/farm.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: '(min-width: 1401px)',
    },
  ];

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={'#fff'}
        title="agrarian"
        id="adfullscreenbg"
        role="img"
        aria-label="Agrarian"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  );
};

ArtDirectedFullBackground.propTypes = {
  className: PropTypes.object,
  children: PropTypes.object.isRequired,
  desktopImagePath: PropTypes.object.isRequired,
  mobileImagePath: PropTypes.object.isRequired,
};

const StyledFullBackground = styled(ArtDirectedFullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledFullBackground;
