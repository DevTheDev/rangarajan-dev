import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import { StyledContentCenterWrapper } from 'components/SharedStyledComponents'
import ArtDirectedFullBackground from 'components/backgroundArt'

const StyledCenterWrapper = styled(StyledContentCenterWrapper)`
  max-width: 800px;
`

const Agrarian = () => (
    <div>
      <ArtDirectedFullBackground>
        <StyledCenterWrapper>
          <h1>this is agrarian.</h1> {/*TODO: Fix formatting here so this looks proper*/}
          <h1>connecting humans to intentional food</h1>
        </StyledCenterWrapper>
      </ArtDirectedFullBackground>
    </div>
);

export default Agrarian
