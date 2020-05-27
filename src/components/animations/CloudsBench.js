import React from 'react';
import styled from 'styled-components'
import Cloud from './movieclips/Cloud'
import Flowers from './movieclips/Flowers'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { useParallax } from './hooks/parallax'
import { withFloat } from './hoc/motion'

const Wrapper = styled.div`
  width: 1102px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 68.51%;
  }
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 13.15%;
  height: auto;
  left: 73.95%;
  top: 25%;
  transition: transform 800ms ease-out;
`;

const BigCloud = styled(Cloud)`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  left: 0;
  animation-delay: -1.25s;
`;

// const Fog = styled(Cloud)`
//   display: block;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: auto;
//   left: 0;
//   opacity: 0.25;
// `;

const Bench = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 59.7%;
  height: auto;
  left: 17.06%;
  top: 21.06%;
  transition: transform 800ms ease-out;
`;

const Train = styled(Cloud)`
  display:block;
  position: absolute;
  bottom: 0;
  width: 93.65%;
  height: auto;
  left: 5.71%;
  top: 28.74%;
`;

const Flowers1 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 11.98%;
  height: auto;
  left: 11.98%;
  top: 25%;
  `;
  
  const Flowers2 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 13.34%;
  height: auto;
  left: 22.32%;
  top: 17.88%;
  animation-delay: -0.75s;
`;

const Flowers3 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 13.52%;
  height: auto;
  right: 19.5%;
  top: 0;
  animation-delay: -1.25s;
`;

const ParallaxWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: transform 800ms ease-out;
`;

const CloudsBench = (props) => {

  const scrollY = useParallax([-0.25, -0.2, -0.1], -250, 250)

  return (
    <Wrapper className={props.className}>
      <Flowers1 src={require ('../../assets/imgs/lina/flowers-2.jpg')} />
      <Flowers2 src={require ('../../assets/imgs/lina/flowers-1.jpg')} />
      <Number src={require ('../../assets/imgs/lina/number.jpg')} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
      <Flowers3 src={require ('../../assets/imgs/lina/flowers-1.jpg')} />
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}}>
        <BigCloud src={require ('../../assets/imgs/lina/cloud.jpg')} />
      </ParallaxWrapper>
      <Bench src={require ('../../assets/imgs/lina/bench.jpg')} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}}>
        <Train src={require ('../../assets/imgs/lina/train.jpg')} />
      </ParallaxWrapper>
      {/* <Fog src={require ('../../assets/imgs/lina/cloud.png')} /> */}
    </Wrapper>
  );
}

export default CloudsBench;