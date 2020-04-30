import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import Butterfly from './movieclips/Butterfly'
import { withFlutter } from './hoc/motion'

const Wrapper = styled.div`
  width: 666px;
  max-width: 100%;
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
    right: 0;
    bottom: 0;
    width: 96.09%;
    height: auto;
`;

const Number = styled.img`
    position: absolute;
    bottom: 12.3%;
    width: 13.66%;
    height: auto;
`;

const ButterflyBike = (props) => {
  return (
    <Wrapper className={props.className}>
      <StyledButterfly />
      <Bike src={require ('../../assets/imgs/hay-abortos/bike.png')} alt="" />
      <Number src={require ('../../assets/imgs/hay-abortos/number.png')} alt="10" />
    </Wrapper>
  );
}

export default ButterflyBike