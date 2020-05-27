import React from 'react';
import styled from 'styled-components'
import Heart from '../movieclips/Heart'
import NoteBeat from '../movieclips/NoteBeat'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  `

const GreenHeart = styled(Heart)`
  position: absolute;
  width: 70%;
  height: auto;
  left: -15%;
  top: -10%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 45%;
  }
  
`;

const Note1 = styled(NoteBeat)`
  position: absolute;
  width: 50%;
  height: auto;
  right: 10%;
  top: 0;
  transform-origin: 95% 5%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 34.51%;
  }
`;

const Note2 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 49.33%;
  height: auto;
  right: 0;
  bottom: 5%;
`;

const Chat1 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 60%;
  height: auto;
  left: 0%;
  top: 20%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 41.12%;
    top: 4.91%;
  }
  
`;

const Chat2 = styled(AlphaMatteImg)`
  position: absolute;
  width: 60%;
  height: auto;
  left: 5%;
  bottom:5%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 41.12%;
    bottom: 15%;
  }
`;

const Number = styled(AlphaMatteImg)`
  position: absolute;
  width: 30%;
  height: auto;
  right: 10%;
  top: 20.81%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 25%;
  }
`;

const CloudsBench = (props) => {
  return (
    <Wrapper className={props.className}>
      <Note2 src={require('../../../assets/imgs/el-palpitar-de-los-abortos/note-2.jpg')} />
      <Chat2 src={require('../../../assets/imgs/el-palpitar-de-los-abortos/chat-2.jpg')} />
      <Number src={require('../../../assets/imgs/el-palpitar-de-los-abortos/number.jpg')} />
      <GreenHeart src={require('../../../assets/imgs/el-palpitar-de-los-abortos/heart.jpg')} />
      <Note1 src={require('../../../assets/imgs/el-palpitar-de-los-abortos/note-1.jpg')} />
      <Chat1 src={require('../../../assets/imgs/el-palpitar-de-los-abortos/chat-1.jpg')} />
    </Wrapper>
  );
}

export default CloudsBench;