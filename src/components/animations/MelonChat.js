import React from 'react';
import styled from 'styled-components'
import { useParallax } from './hooks/parallax'
import AlphaMatteImg from './graphics/AlphaMatteImg'
// import Melon from './movieclips/Melon'

const Wrapper = styled.div`
  width: 606px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 87.78%;
  }
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 17.49%;
  height: auto;
  right: 1.8%;
  top: 26.89%;
  transition: transform 800ms ease-out;
`;

const Chat = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 74.58%;
  height: auto;
  left: 4.62%;
  top: 0;
  transition: transform 300ms ease-out;
`;

const Shadow = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 98.35%;
  height: auto;
  right: 0;
  bottom: 0;
  transition: transform 300ms ease-out;
`;

const BackMelon = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 41.91%;
  height: auto;
  left: 0;
  top: 19.55%;
  transition: transform 300ms ease-out;
`;

const FrontMelon = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 82%;
  height: auto;
  left: 16.17%;
  top: 35.34%;
  transition: transform 300ms ease-out;
`;

const CloudsBench = (props) => {

  const scrollY = useParallax([-0.15, -0.1, 0.15, -0.11, -0.5])

  return (
    <Wrapper className={props.className}>
      <Chat style={{transform: `translate3d(0,${scrollY[2]}px,0)`}} src={require ('../../assets/imgs/quiero-que-salga/chat.jpg')} />
      <Shadow style={{transform: `translate3d(0,${scrollY[3]}px,0)`}} src={require ('../../assets/imgs/quiero-que-salga/shadow.jpg')} />
      <BackMelon style={{transform: `translate3d(0,${scrollY[1]}px,0)`}} src={require ('../../assets/imgs/quiero-que-salga/back_melon.jpg')} />
      <FrontMelon style={{transform: `translate3d(0,${scrollY[0]}px,0)`}} src={require ('../../assets/imgs/quiero-que-salga/front_melon.jpg')} />
      <Number style={{transform: `translate3d(0,${scrollY[4]}px,0)`}} src={require ('../../assets/imgs/quiero-que-salga/number.jpg')} />
    </Wrapper>
  );
}

export default CloudsBench;