import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import Congress from '../movieclips/Congress'
import SingleFlower from '../movieclips/SingleFlower'

const Wrapper = styled(Collage)`
  position: absolute;
  bottom: 0;

   @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
      position: absolute;
      bottom: -2%;
      left: -12%;
      width: 35.75%;
      height: auto;
    }    
`

const Flowers = styled(Collage)`
  position: absolute;
  bottom: -100%;
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {

  }     
`

const Building = styled(Congress)`
  position: absolute;
  width: 70%;
  left: -90%;
  bottom: 40%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
  }     
`


const LaBuenaNoticia = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper width={835} height={651} className={props.className}>
      <Flowers width={835} height={651} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }}>
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/big_flower.jpg')} width={224} x={245} origin="85% bottom" />
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={186} x={426} delay="-2.9s" />
      </Flowers>
      <Building width={300} height={500} />
      <CollagePiece src={require('../../../assets/imgs/la-buena-noticia/flower.jpg')} width={133} x={700} y={600} />
    </Wrapper>
  );
}

export default LaBuenaNoticia;