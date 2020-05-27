import React from 'react';
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'

const BluePhone = (props) => {
  return (
    <Collage {...props}>
      <CollagePiece src={require('../../../assets/imgs/urgencia-rosa/blue_phone_cable.jpg')} width={348} x={0} y={0} />
      <CollagePiece src={require('../../../assets/imgs/urgencia-rosa/blue_phone_body.jpg')} width={196} x={155} y={179} />
    </Collage>
  );
}

export default BluePhone