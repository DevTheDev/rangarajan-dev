import React from 'react';
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
const ArtDirectedFullBackground = ({ className, children, desktopImagePath, mobileImagePath }) => {
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
  )

  // Art-Direction Array
  const backgroundArtDirectionStack = [
    small.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 1401px)`,
    },
  ]

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundArtDirectionStack}
        backgroundColor={`#040e18`}
        title="Art-Directed Fullscreen Background"
        id="adfullscreenbg"
        role="img"
        aria-label="Art-Directed Fullscreen Background"
        preserveStackingContext={true}
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledFullBackground = styled(ArtDirectedFullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default StyledFullBackground
