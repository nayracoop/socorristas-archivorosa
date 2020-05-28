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
    left: 60%;
  }
  `

const Shadow = styled(CollagePiece)`

  ;`


const Plant = styled(CollagePiece)`
  position: absolute;
    
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    top: 20%;;
  }
;`

const Number = styled(CollagePiece)`
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    top: 50%;
  }
;`




const Nilda = (props) => {

  const scrollY = useParallax([-0.15, 0.1, -0.08, -0.11, 0.09], -250, 250)

  return (
    <Wrapper width={634} height={584} className={props.className}>
      <Shadow src={require('../../../assets/imgs/nilda/shadow.jpg')} x={23} y={170} width={611} style={{ transform: `translate3d(0,${scrollY[3]}px,0)` }} />
      <CollagePiece src={require('../../../assets/imgs/nilda/suitcases.jpg')} x={7} y={185} width={611} style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }} />
      <Plant src={require('../../../assets/imgs/nilda/plantpot.jpg')} x={-250} y={90} width={250} style={{ transform: `translate3d(${scrollY[1]}px,${scrollY[0]}px,0)` }} />
      <Number src={require('../../../assets/imgs/nilda/number.jpg')} x={-80} y={150} width={90} style={{ transform: `translate3d(${scrollY[4]}px,${scrollY[0]}px,0)` }} />
    </Wrapper>
  );
}

export default Nilda;