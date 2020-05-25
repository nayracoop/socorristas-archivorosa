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
  bottom: 0;
  width: 45%;
  height: auto;
  left: -5%;
  top: 0;
`;

const Note1 = styled(NoteBeat)`
  position: absolute;
  bottom: 0;
  width: 34.51%;
  height: auto;
  right: 10%;
  top: 41.33%;
  transform-origin: 95% 5%;
`;

const Note2 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 49.33%;
  height: auto;
  right: 0;
  top: 15.03%;
`;

const Chat1 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 41.12%;
  height: auto;
  left: 0%;
  top: 4.91%;
`;

const Chat2 = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 43.45%;
  height: auto;
  left: 21.05%;
  bottom: 0%;
`;

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 18.97%;
  height: auto;
  left: 04.04%;
  top: 20.81%;
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