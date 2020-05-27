import React from 'react';
import styled from 'styled-components'
import Flowers from './movieclips/Flowers'
import Leaves from './movieclips/Leaves'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { useParallax } from './hooks/parallax'

const Wrapper = styled.div`
  width: 817px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 84.7%;
  }
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 10.28%;
  height: auto;
  left: 51.2%;
  top: 18%;
  transition: transform 800ms ease-out;
`;

const Branch = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 71.65%;
  height: auto;
  left: 0;
  top: 47.26%;
`;

const Flower = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 31.94%;
  height: auto;
  left: 1.2%;
  top: 22.03%;
  transform-origin: bottom center;
`;

const Bassinet = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 55.26%;
  height: auto;
  left: 7.9%;
  top: 34.71%;
`;

const HangingMobile = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 25.35%;
  height: auto;
  left: 20.7%;
  top: 0;
  transition: transform 800ms ease-out;
`;

const Blanket = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 54.66%;
  height: auto;
  left: 11.72%;
  top: 42.32%;
  transition: transform 800ms ease-out;
`;

const AutumnLeaves = styled(Leaves)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  left: 0;
  top: 30%;
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

const BassinetBranch = (props) => {

  const scrollY = useParallax([ -0.05, -0.15, -0.25, 0.1, -0.025 ], -250, 250)

  return (
    <Wrapper className={props.className}>
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}}>
        <Number src={require ('../../assets/imgs/viento-de-venecia/number.jpg')} style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}} />
        <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}}>
          <HangingMobile src={require ('../../assets/imgs/viento-de-venecia/hanging-mobile.jpg')} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
          <Flower src={require ('../../assets/imgs/viento-de-venecia/flower.jpg')} />
          <Branch src={require ('../../assets/imgs/viento-de-venecia/branch.jpg')} />
          <Bassinet src={require ('../../assets/imgs/viento-de-venecia/bassinet.jpg')} />
          <Blanket src={require ('../../assets/imgs/viento-de-venecia/blanket.jpg')} />
        </ParallaxWrapper>
      </ParallaxWrapper>
      <AutumnLeaves leaves={[
        require ('../../assets/imgs/viento-de-venecia/leave-1.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-2.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-3.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-4.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-5.jpg')
      ]} />
    </Wrapper>
  );
}

export default BassinetBranch;