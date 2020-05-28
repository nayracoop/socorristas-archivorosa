import React from 'react';
import styled from 'styled-components'
import Cloud from '../movieclips/Cloud'
import Flowers from '../movieclips/Flowers'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  width: 30%;
  height: auto;
  right: 1%;
  top: 18%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    position: absolute;
    width: 13.15%;
    height: auto;
    top: 15%;
    right: 15%;
  }
`;

const Train = styled(Cloud)`
  position: absolute;
  bottom:-10%;
  width: 250%;
  right: -20%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    display:block;
    position: absolute;
    bottom:-40%;
    width: 80%;
    height: auto;
    right: 1px;
  }

`;

const Flowers1 = styled(Flowers)`
  position: absolute;
  width: 20%;
  height: auto;
  right: 0;
  bottom: 5%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    position: absolute;
    bottom: 0;
    width: 11.98%;
    height: auto;
    right: 0;
    top: 35%;
  }

  `;

const Flowers2 = styled(Flowers)`
  position: absolute;
  width: 25%;
  height: auto;
  left: -2%;
  bottom: 25%;
  animation-delay: -0.75s;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 13.34%;
    height: auto;
    right: 10%;
    bottom: 17.88%;
    animation-delay: -0.75s;
  }
  
`;

const CloudsBench = (props) => {
  return (
    <Wrapper className={props.className}>
      <Flowers1 src={require('../../../assets/imgs/lina/flowers-2.jpg')} />
      <Flowers2 src={require('../../../assets/imgs/lina/flowers-1.jpg')} />
      <Number src={require('../../../assets/imgs/lina/number.jpg')} />
      <Train src={require('../../../assets/imgs/lina/train.jpg')} />
    </Wrapper>
  );
}

export default CloudsBench;