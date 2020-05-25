import React from 'react';
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import CongressDome from './CongressDome'

const Congress = (props) => {
  return (
    <Collage {...props}>
      <CongressDome src={require ('../../../assets/imgs/la-buena-noticia/dome.jpg')} x={292} y={0} width={158} />
      <CollagePiece src={require ('../../../assets/imgs/la-buena-noticia/congress.jpg')} x={0} y={73} width={779} />
    </Collage>
  );
}

export default Congress