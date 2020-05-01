import React from 'react';
import styled from 'styled-components'
import Cloud from './movieclips/Cloud'
import Flowers from './movieclips/Flowers'
import AlphaMatteImg from './graphics/AlphaMatteImg'
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

const Bench = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 59.7%;
  height: auto;
  left: 17.06%;
  top: 21.06%;
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
`;

const Flowers3 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 13.52%;
  height: auto;
  right: 19.5%;
  top: 0;
`;

const CloudsBench = (props) => {
  return (
    <Wrapper className={props.className}>
      <Flowers1 src={require ('../../assets/imgs/lina/flowers-2.jpg')} />
      <Flowers2 src={require ('../../assets/imgs/lina/flowers-1.jpg')} />
      <Number src={require ('../../assets/imgs/lina/number.jpg')} />
      <Flowers3 src={require ('../../assets/imgs/lina/flowers-1.jpg')} />
      <BigCloud src={require ('../../assets/imgs/lina/cloud.png')} />
      <Bench src={require ('../../assets/imgs/lina/bench.jpg')} />
      <Train src={require ('../../assets/imgs/lina/train.png')} />
    </Wrapper>
  );
}

export default CloudsBench;