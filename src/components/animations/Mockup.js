import React from 'react';
import styled, { withTheme } from 'styled-components';
import CloudsBench from './CloudsBench';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100vh;
  align-content: center;
  justify-content: center;
`

const Show = styled.div`
  width:100%;
`

const Mockup = (props) => {

  return (
    <Wrapper>
      <Show><CloudsBench /></Show>
    </Wrapper>
  );
}

export default withTheme(Mockup);