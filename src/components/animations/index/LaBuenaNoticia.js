import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import CollagePiece from '../graphics/CollagePiece'
import Collage from '../graphics/Collage'
import SingleFlower from '../movieclips/SingleFlower'
import CongressDome from '../movieclips/CongressDome'
import Flock from '../movieclips/Flock'

const Wrapper = styled(Collage)`
  position: absolute;
  width: 100%;
  height: 100%;

   @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
      position: absolute;
      bottom: -2%;
      left: -12%;
      width: 35.75%;
      height: auto;
    }    
`

const Flowers = styled.div`
  position: absolute;
  bottom: -100%;
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
  }     
`
const Congress = styled.div`
  width: 70%;
  left: -90%;
`

const Building = styled(CollagePiece)`
  z-index: 3;
`
const Birds = styled(Flock)`

`
const Dome = styled(CongressDome)`
  position: absolute;
  top: -60%;
`

const LaBuenaNoticia = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper width={835} height={651} className={props.className}>
      <Flowers width={600} height={400} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }}>
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/big_flower.jpg')} width={224} x={245} origin="85% bottom" />
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={186} x={426} delay="-2.9s" />
      </Flowers>

      <Congress style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }}>
        <Building src={require('../../../assets/imgs/la-buena-noticia/congress.jpg')} x={0} y={73} width={779} />
        <Dome src={require('../../../assets/imgs/la-buena-noticia/dome.jpg')} x={292} y={0} width={158} />
        <Birds width={420} height={350} x={398} y={-228} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} />
      </Congress>
    </Wrapper>
  );
}

export default LaBuenaNoticia;