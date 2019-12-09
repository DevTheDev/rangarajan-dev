import React from 'react';
import styled from 'styled-components';

import { StyledContentCenterWrapper } from 'components/SharedStyledComponents';
import ArtDirectedFullBackground from 'components/backgroundArt';

const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
  max-width: 800px;
`

const Agrarian = () => (
  <div style={{border: 'none'}}>
      <div style={{border: 'none'}}> {/*TODO: Get Rid of the border, need to make a special class for it*/}
        <ArtDirectedFullBackground desktopImagePath="images/farm.jpg" mobileImagePath="images/farm.jpg">
          <StyledCenterWrapper>
            <h1>this is agrarian.</h1> {/*TODO: Fix formatting here so this looks proper*/}
            <h1>connecting humans to intentional food</h1>
          </StyledCenterWrapper>
        </ArtDirectedFullBackground>
      </div>
      <div style={{border: 'none'}}>
        <ArtDirectedFullBackground>
          <h1>our stories</h1> {/*TODO: make an agrarian text wrapper*/}
        </ArtDirectedFullBackground>
      </div>
  </div>
);

export default Agrarian
