import React from 'react';
import styled from 'styled-components'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import CongressDome from './CongressDome'
import Flock from './Flock'

const Building = styled(CollagePiece)`
  z-index: 3;
`

const Congress = (props) => {
  return (
    <Collage {...props}>
      <CongressDome src={require ('../../../assets/imgs/la-buena-noticia/dome.jpg')} x={292} y={0} width={158} />
      <Flock width={420} height={350} x={398} y={-228} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} quantity={props.birds ? props.birds : 30} />
      <Building src={require ('../../../assets/imgs/la-buena-noticia/congress.jpg')} x={0} y={73} width={779} />
    </Collage>
  );
}

export default Congress