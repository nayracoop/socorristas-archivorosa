import React from 'react';
import styled from 'styled-components'
import Flowers from '../movieclips/Flowers'
import Leaves from '../movieclips/Leaves'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: 100%;
  height:100%;
  position: absolute;
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 15%;
  height: auto;
  right: 5%;
  top: 5%;
`;

const Branch = styled(AlphaMatteImg)`
  position: absolute;
  width:80%;
  height: auto;
  left: 0;
  bottom: -20%;
`;

const Flower = styled(Flowers)`
  position: absolute;
  bottom: 0;
  width: 31.94%;
  height: auto;
  left: 1.2%;
  bottom: -10;
  transform-origin: bottom center;
`;

const Bassinet = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 55.26%;
  height: auto;
  left: 12%;
  bottom: 4%;
`;

const HangingMobile = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 40%;
  height: auto;
  left: 5%;
  top: 0;
`;

const Blanket = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 54.66%;
  height: auto;
  left: 15%;
  bottom:-5%;
`;

const AutumnLeaves = styled(Leaves)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  left: 0;
  top: 30%;
`;

const VientoEnVenecia = (props) => {
  return (
    <Wrapper className={props.className}>
      <Number src={require('../../../assets/imgs/viento-de-venecia/number.jpg')} />
      <HangingMobile src={require('../../../assets/imgs/viento-de-venecia/hanging-mobile.jpg')} />
      <Flower src={require('../../../assets/imgs/viento-de-venecia/flower.jpg')} />
      <Branch src={require('../../../assets/imgs/viento-de-venecia/branch.jpg')} />
      <Bassinet src={require('../../../assets/imgs/viento-de-venecia/bassinet.jpg')} />
      <Blanket src={require('../../../assets/imgs/viento-de-venecia/blanket.jpg')} />
      <AutumnLeaves leaves={[
        require('../../../assets/imgs/viento-de-venecia/leave-1.jpg'),
        require('../../../assets/imgs/viento-de-venecia/leave-2.jpg'),
        require('../../../assets/imgs/viento-de-venecia/leave-3.jpg'),
        require('../../../assets/imgs/viento-de-venecia/leave-4.jpg'),
        require('../../../assets/imgs/viento-de-venecia/leave-5.jpg')
      ]} />
    </Wrapper>
  );
}

export default VientoEnVenecia;