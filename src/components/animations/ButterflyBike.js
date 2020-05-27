import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import Butterfly from './movieclips/Butterfly'
import { withFlutter } from './hoc/motion'
import { useParallax } from './hooks/parallax'

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
    transition: transform 800ms ease-out;
`;

const Bike = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 96.09%;
    height: auto;
    transition: transform 800ms ease-out;
`;

const Number = styled(AlphaMatteImg)`
    display: block;
    position: absolute;
    bottom: 12.3%;
    width: 13.66%;
    height: auto;
    transition: transform 800ms ease-out;
`;

const ParallaxWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: transform 800ms ease-out;
`;

const ButterflyBike = (props) => {

  const scrollY = useParallax([-0.25, -0.05, -0.15, -0.1, -0.2], -250, 250)

  return (
    <Wrapper className={props.className}>
      <StyledButterfly style={{ transform: `translate3d(0,${scrollY[1]}px,0)` }} />
      <Bike src={require('../../assets/imgs/hay-abortos/bike.png')} alt="" style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }} />
      <Number src={require('../../assets/imgs/hay-abortos/number.jpg')} alt="10" style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }} />
    </Wrapper>
  );
}

export default ButterflyBike