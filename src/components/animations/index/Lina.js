import React from 'react';
import styled from 'styled-components'
import Cloud from '../movieclips/Cloud'
import Flowers from '../movieclips/Flowers'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withFloat } from '../hoc/motion'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  width: 13.15%;
  height: auto;
  right:5%;;
  top: 25%;
`;

const BigCloud = styled(Cloud)`
  position: absolute;
  top:-70%;
  width: 90%;
  height: auto;
  left: -30%;;
  animation-delay: -1.25s;
`;

const Train = styled(Cloud)`
  display:block;
  position: absolute;
  bottom:-40%;
  width: 80%;
  height: auto;
  right: 1px;
`;

const Flowers1 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 11.98%;
  height: auto;
  right: 0;
  top: 35%;
  `;

const Flowers2 = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 13.34%;
  height: auto;
  right: 10%;
  bottom: 17.88%;
  animation-delay: -0.75s;
`;

const CloudsBench = (props) => {
  return (
    <Wrapper className={props.className}>
      <Flowers1 src={require('../../../assets/imgs/lina/flowers-2.jpg')} />
      <Flowers2 src={require('../../../assets/imgs/lina/flowers-1.jpg')} />
      <Number src={require('../../../assets/imgs/lina/number.jpg')} />
      <BigCloud src={require('../../../assets/imgs/lina/cloud.jpg')} />
      <Train src={require('../../../assets/imgs/lina/train.jpg')} />
    </Wrapper>
  );
}

export default CloudsBench;