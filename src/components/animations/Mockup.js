import React from 'react';
import styled, { withTheme } from 'styled-components';
import ButterflyBike from './ButterflyBike';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100vh;
  align-content: center;
  justify-content: center;
`

const Show = styled.div`
  min-width: 960px;
`

const Mockup = (props) => {

  return (
    <Wrapper>
      <Show><ButterflyBike /></Show>
    </Wrapper>
  );
}

export default withTheme(Mockup);