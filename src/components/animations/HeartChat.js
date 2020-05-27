import React from 'react';
import styled from 'styled-components'
import Heart from './movieclips/Heart'
import NoteBeat from './movieclips/NoteBeat'
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

const GreenHeart = styled(Heart)`
  position: absolute;
  bottom: 0;
  width: 47%;
  height: auto;
  left: 17.5%;
  top: 0;
`;

const Note1 = styled(NoteBeat)`
  position: absolute;
  bottom: 0;
  width: 34.51%;
  height: auto;
  left: 53.49%;
  top: 41.33%;
  transform-origin: 95% 5%;
`;

const Note2 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 49.33%;
  height: auto;
  left: 50.67%;
  top: 15.03%;
  transition: transform 800ms ease-out;
`;

const Chat1 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 41.12%;
  height: auto;
  left: 0%;
  top: 4.91%;
  transition: transform 800ms ease-out;
`;

const Chat2 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 43.45%;
  height: auto;
  left: 21.05%;
  bottom: 0%;
  transition: transform 800ms ease-out;
`;

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 18.97%;
  height: auto;
  left: 04.04%;
  top: 20.81%;
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

const CloudsBench = (props) => {

  const scrollY = useParallax([-0.25, -0.05, -0.15, -0.1, -0.2], -250, 250)
  
  return (
    <Wrapper className={props.className}>
      <Note2 src={require ('../../assets/imgs/el-palpitar-de-los-abortos/note-2.jpg')} style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}}  />
      <Chat2 src={require ('../../assets/imgs/el-palpitar-de-los-abortos/chat-2.jpg')} style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}} />
      <Number src={require ('../../assets/imgs/el-palpitar-de-los-abortos/number.jpg')} style={{ transform: `translate3d(0,${scrollY[4]}px,0)`}} />
      <ParallaxWrapper style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} >
        <GreenHeart src={require ('../../assets/imgs/el-palpitar-de-los-abortos/heart.jpg')} />
        <Note1 src={require ('../../assets/imgs/el-palpitar-de-los-abortos/note-1.jpg')} />
      </ParallaxWrapper>
      <Chat1 src={require ('../../assets/imgs/el-palpitar-de-los-abortos/chat-1.jpg')}  style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}} />
    </Wrapper>
  );
}

export default CloudsBench;