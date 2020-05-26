import React from 'react';
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left:0;
  top:0;
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  width: 10%;
  right: 1%;
  bottom: 30%;
  transition: transform 800ms ease-out;
`;

const Chat = styled(AlphaMatteImg)`
  position: absolute;
  width: 30%;
  left: 0%;
  bottom: 0%;
  z-index:1000;
  transition: transform 300ms ease-out;
`;

const Shadow = styled(AlphaMatteImg)`
  position: absolute;
  width: 40%%;
  left: 0%;
  bottom: 0%;
  transition: transform 300ms ease-out;
`;

const BackMelon = styled(AlphaMatteImg)`
  position: absolute;
  width: 20%;;
  left: 0%;
  bottom: 0%;
  transition: transform 300ms ease-out;
`;

const FrontMelon = styled(AlphaMatteImg)`
  position: absolute;
  width: 35%;
  left: 0%;
  bottom: 0%;
  transition: transform 300ms ease-out;
`;

const MelonChat = (props) => {

  const scrollY = useParallax([0.01, -0.009, 0.015, -0.0003, 0.018])

  return (
    <Wrapper className={props.className}>
      <Chat style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/chat.jpg')} />
      <Shadow style={{ transform: `translate3d(0,${scrollY[3]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/shadow.jpg')} />
      <BackMelon style={{ transform: `translate3d(0,${scrollY[1]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/back_melon.jpg')} />
      <FrontMelon style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/front_melon.jpg')} />
      <Number style={{ transform: `translate3d(0,${scrollY[4]}px,0)` }} src={require('../../../assets/imgs/quiero-que-salga/number.jpg')} />
    </Wrapper>
  );
}

export default MelonChat;