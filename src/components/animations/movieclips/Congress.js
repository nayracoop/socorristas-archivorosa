import React from 'react';
import styled from 'styled-components'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import CongressDome from './CongressDome'
import Flock from './Flock'
import SingleFlower from './SingleFlower';

const Building = styled(CollagePiece)`
  z-index: 3;
`

const Congress = (props) => {
  return (
    <Collage {...props}>
      { props.withFlowers ? <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/big_flower.jpg')} width={224} x={207} y={102} origin="85% bottom" /> : <span></span> }
      { props.withFlowers ? <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={186} x={409} y={120} delay="-2.9s" /> : <span></span> }
      <CongressDome src={require ('../../../assets/imgs/la-buena-noticia/dome.jpg')} x={292} y={0} width={158} />
      <Flock width={420} height={350} x={398} y={-228} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} quantity={ props.birds ? props.birds : 30} />
      <Building src={require ('../../../assets/imgs/la-buena-noticia/congress.jpg')} x={0} y={73} width={779} />
    </Collage>
  );
}

export default Congress