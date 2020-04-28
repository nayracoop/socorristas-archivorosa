import React from 'react';
import styled, { withTheme } from 'styled-components';
import MegaphoneBalloon from './MegaphoneBalloon';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`

const Mockup = (props) => {

  return (
    <Wrapper>
      <MegaphoneBalloon />
    </Wrapper>
  );
}

export default withTheme(Mockup);