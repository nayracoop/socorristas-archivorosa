import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import CongressDome from '../movieclips/CongressDome'
import Flock from '../movieclips/Flock'
import SingleFlower from '../movieclips/SingleFlower'
import CollagePiece from '../graphics/CollagePiece'

const Wrapper = styled.div`
  position: absolute;  
  height: 100%;
  width: 100%;
  left:0;
  top:0;
`

const Building = styled(CollagePiece)`
  position: absolute;
  top: 40%;
  left: -35%;
  z-index: 300;
  height: 60%;
`

const Dome = styled(CongressDome)`
  position: absolute;
  width: 20%;
  top:25%;
  left:-3%;

`
const Birds = styled(Flock)`
  position: absolute;
  bottom: 150%;
  left:7%;

`
const Flower1 = styled(SingleFlower)`
  position: absolute;
  top: 49%;
  left: -5%;
`

const Flower2 = styled(SingleFlower)`
  position: absolute;
  top: 54%;
  left: 9%;
`
const Flower3 = styled(SingleFlower)`
  position: absolute;
  top:80%;
  left: 35%;
`

const LaBuenaNoticia = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper>
      <Dome src={require('../../../assets/imgs/la-buena-noticia/dome.jpg')} />
      <Birds width={1280} height={1280} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} />
      <Building src={require('../../../assets/imgs/la-buena-noticia/congress.jpg')} />
      <Flower1 src={require('../../../assets/imgs/la-buena-noticia/big_flower.jpg')} />
      <Flower2 src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} delay="-2.9s" />
      <Flower3 src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} delay="-2.9s" />
    </Wrapper>
  );
}

export default LaBuenaNoticia;