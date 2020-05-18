import React from 'react';
import styled from 'styled-components'
import Flowers from './movieclips/Flowers'
import Leaves from './movieclips/Leaves'
import AlphaMatteImg from './graphics/AlphaMatteImg'

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

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 10.28%;
  height: auto;
  left: 51.2%;
  top: 18%;
`;

const Branch = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 71.65%;
  height: auto;
  left: 0;
  top: 47.26%;
`;

const Flower = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 31.94%;
  height: auto;
  left: 1.2%;
  top: 22.03%;
  transform-origin: bottom center;
`;

const Bassinet = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 55.26%;
  height: auto;
  left: 7.9%;
  top: 34.71%;
`;

const HangingMobile = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 25.35%;
  height: auto;
  left: 20.7%;
  top: 0;
`;

const Blanket = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 54.66%;
  height: auto;
  left: 11.72%;
  top: 42.32%;
`;

const AutumnLeaves = styled(Leaves)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  left: 0;
  top: 30%;
`;

const BassinetBranch = (props) => {
  return (
    <Wrapper className={props.className}>
      <Number src={require ('../../assets/imgs/viento-de-venecia/number.jpg')} />
      <HangingMobile src={require ('../../assets/imgs/viento-de-venecia/hanging-mobile.jpg')} />
      <Flower src={require ('../../assets/imgs/viento-de-venecia/flower.jpg')} />
      <Branch src={require ('../../assets/imgs/viento-de-venecia/branch.jpg')} />
      <Bassinet src={require ('../../assets/imgs/viento-de-venecia/bassinet.jpg')} />
      <Blanket src={require ('../../assets/imgs/viento-de-venecia/blanket.jpg')} />
      <AutumnLeaves leaves={[
        require ('../../assets/imgs/viento-de-venecia/leave-1.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-2.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-3.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-4.jpg'),
        require ('../../assets/imgs/viento-de-venecia/leave-5.jpg')
      ]} />
    </Wrapper>
  );
}

export default BassinetBranch;