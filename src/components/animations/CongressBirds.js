import React from 'react'
import { useParallax } from './hooks/parallax'
import AlphaMatteSprite from './graphics/AlphaMatteSprite'
import Collage from './graphics/Collage'
import CollagePiece from './graphics/CollagePiece'
import Congress from './movieclips/Congress'
import SingleFlower from './movieclips/SingleFlower'

const CongressBirds = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Collage width={835} height={651  } className={props.className}>
      <Collage width={835} height={651} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}}>
        <SingleFlower src={require('../../assets/imgs/la-buena-noticia/big_flower.jpg')} width={224} x={245} y={330} origin="85% bottom" />
        <SingleFlower src={require('../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={186} x={426} y={348} delay="-2.9s" />
      </Collage>
      <Collage width={835} height={651} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}}>
        <SingleFlower src={require('../../assets/imgs/la-buena-noticia/flower_left.jpg')} width={133} x={0} y={319} origin="85% bottom" delay="-2.8s" />
        <SingleFlower src={require('../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={112} x={133} y={349} />
      </Collage>
      <Collage width={835} height={651} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}}>
        <Congress width={779} height={423} x={17} y={228} />
        <CollagePiece src={require('../../assets/imgs/la-buena-noticia/flower.jpg')} width={133} x={663} y={348} />
      </Collage>
    </Collage>
  );
}

export default CongressBirds;