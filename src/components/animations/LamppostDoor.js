import React from 'react'
import { useParallax } from './hooks/parallax'
import Collage from './graphics/Collage'
import CollagePiece from './graphics/CollagePiece'
import Autumm from './movieclips/Autumm'
import Roses from './movieclips/Roses'

const LamppostDoor = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Collage width={538} height={706} className={props.className}>
      <CollagePiece src={require('../../assets/imgs/cuando-estamos-juntas/door.jpg')} width={275} x={128} y={170} style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}} />
      <CollagePiece src={require('../../assets/imgs/cuando-estamos-juntas/number.jpg')} width={42} x={361} y={292} />
      <CollagePiece src={require('../../assets/imgs/cuando-estamos-juntas/lamppost.jpg')} width={108} x={75} y={0} style={{ transform: `translate3d(0,${scrollY[1]}px,0)`}} />
      <Collage width={538} height={706} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}}>
        <Roses src={require('../../assets/imgs/cuando-estamos-juntas/flowers.jpg')} width={176} x={85} y={94} />
      </Collage>
      <Autumm width={898} height={294} x={-80} y={312} src={require('../../assets/imgs/cuando-estamos-juntas/leaves.jpg')} />
    </Collage>
  );
}

export default LamppostDoor;