import React from 'react'
import { useParallax } from './hooks/parallax'
import Collage from './graphics/Collage'
import CollagePiece from './graphics/CollagePiece'

const SuitcasePlant = (props) => {

  const scrollY = useParallax([-0.15, 0.1, -0.08, -0.11, 0.09], -250, 250)

  return (
    <Collage width={634} height={584} className={props.className}>
      <CollagePiece src={require ('../../assets/imgs/nilda/tickets.jpg')} x={168} y={89} width={93} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
      <CollagePiece src={require ('../../assets/imgs/nilda/shadow.jpg')} x={23} y={150} width={611} style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}} />
      <CollagePiece src={require ('../../assets/imgs/nilda/suitcases.jpg')} x={7} y={185} width={611} style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}} />
      <CollagePiece src={require ('../../assets/imgs/nilda/plantpot.jpg')} x={198} y={0} width={191} style={{ transform: `translate3d(${scrollY[1]}px,${scrollY[0]}px,0)`}} />
      <CollagePiece src={require ('../../assets/imgs/nilda/number.jpg')} x={314} y={107} width={66} style={{ transform: `translate3d(${scrollY[4]}px,${scrollY[0]}px,0)`}} />
    </Collage>
  );
}

export default SuitcasePlant;