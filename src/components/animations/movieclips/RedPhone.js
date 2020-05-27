import React from 'react';
import styled from 'styled-components'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import SingleFlower from './SingleFlower'

const Building = styled(CollagePiece)`
  z-index: 3;
`

const BluePhone = (props) => {
  return (
    <Collage {...props}>
      <SingleFlower src={require('../../../assets/imgs/urgencia-rosa/flowers_2.jpg')} width={110} x={285} y={67} origin="10% top" delay="-2.9s" />
      <CollagePiece src={require('../../../assets/imgs/urgencia-rosa/blue_phone_cable.jpg')} width={348} x={0} y={0} />
      <CollagePiece src={require('../../../assets/imgs/urgencia-rosa/blue_phone_body.jpg')} width={196} x={155} y={179} />
    </Collage>
  );
}

export default BluePhone