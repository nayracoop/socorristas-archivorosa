import React from 'react';
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left:0;
  top:-3%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    height: 100%;
    width: 100%;
    position: absolute;
    left:0;
    top:0;
  }
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  width: 30%;
  right: 1%;
  top: 10%;
  transition: transform 800ms ease-out;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
      width: 10%;
      right: 1%;
      top: 30%;
    }
`;

const Chat = styled(AlphaMatteImg)`
  position: absolute;
  width: 60%;
  left: 0%;
  bottom: 0%;
  z-index:1000;
  transition: transform 300ms ease-out;
  
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 30%;
    left: 0%;
    bottom: 0%;
  }
`;

const Shadow = styled(AlphaMatteImg)`
  position: absolute;
  width: 90%;
  left: 0%;
  bottom: 5%;
  transition: transform 300ms ease-out;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 40%;
    left: 0%;
    bottom: 0%;
  }
`;

const BackMelon = styled(AlphaMatteImg)`
  position: absolute;
  width: 50%;
  left: -7%;
  bottom: 5%;
  transition: transform 300ms ease-out;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 20%;
    left: 0%;
    bottom: 0%;
  }
`;

const FrontMelon = styled(AlphaMatteImg)`
  position: absolute;
  width: 80%;
  left: 0%;
  bottom: 0%;
  transition: transform 300ms ease-out;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 35%;
  }
`;

const MelonChat = (props) => {

  const scrollY = useParallax([0.005, 0.002, 0.005, 0.0001, 0.05])

  return (
    <Wrapper className={props.className}>
      <Chat style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/chat.jpg')} />
      <Shadow style={{ transform: `translate3d(0,${scrollY[3]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/shadow.jpg')} />
      <BackMelon style={{ transform: `translate3d(0,${scrollY[1]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/back_melon.jpg')} />
      <FrontMelon style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/front_melon.jpg')} />
      <Number src={require('../../../assets/imgs/quiero-que-salga/number.jpg')} />
    </Wrapper>
  );
}

export default MelonChat;