import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'


const Wrapper = styled(Collage)`
  position: absolute;
  width: 80%;
  height: 100%;
  top:25%;
  left: 10%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 41.12%;
    top:40%;
    right: 0;
  }
`
const Shadow = styled(CollagePiece)`

`


const Nilda = (props) => {

  const scrollY = useParallax([-0.15, 0.1, -0.08, -0.11, 0.09], -250, 250)

  return (
    <Wrapper width={634} height={584} className={props.className}>
      <Shadow src={require('../../../assets/imgs/nilda/shadow.jpg')} x={23} y={170} width={611} style={{ transform: `translate3d(0,${scrollY[3]}px,0)` }} />
      <CollagePiece src={require('../../../assets/imgs/nilda/suitcases.jpg')} x={7} y={185} width={611} style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }} />
      <CollagePiece src={require('../../../assets/imgs/nilda/plantpot.jpg')} x={-100} y={0} width={191} style={{ transform: `translate3d(${scrollY[1]}px,${scrollY[0]}px,0)` }} />
      <CollagePiece src={require('../../../assets/imgs/nilda/number.jpg')} x={0} y={90} width={66} style={{ transform: `translate3d(${scrollY[4]}px,${scrollY[0]}px,0)` }} />
    </Wrapper>
  );
}

export default Nilda;