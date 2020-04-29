import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import Butterfly from './movieclips/Butterfly'
import { withFlutter } from './hoc/motion'

const Wrapper = styled.div`
  max-width: 666px;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 83.33%;
  }
`

const StyledButterfly = styled(Butterfly)`
    position: absolute;
    top: 4.68%;
    left: 23%;
    width: 58.25%;
    height: auto;
`;

const Bike = styled.img`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
`;

const ButterflyBike = (props) => {
  return (
    <Wrapper className={props.className}>
      <StyledButterfly />
      <Bike src={require ('../../assets/imgs/hay-abortos/bike.png')} />
    </Wrapper>
  );
}

export default ButterflyBike