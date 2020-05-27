import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import Autumm from '../movieclips/Autumm'
import Roses from '../movieclips/Roses'

const Wrapper = styled(Collage)`
  width: 100%;
  height: 100%;
`

const CuandoEstamosJuntas = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper className={props.className}>
      <CollagePiece src={require('../../../assets/imgs/cuando-estamos-juntas/number.jpg')} width={100} x={500} y={600} />
      <CollagePiece src={require('../../../assets/imgs/cuando-estamos-juntas/lamppost.jpg')} width={180} x={-50} y={600} style={{ transform: `translate3d(0,${scrollY[1]}px,0)` }} />
      <Collage width={538} height={706} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }}>
        <Roses src={require('../../../assets/imgs/cuando-estamos-juntas/flowers.jpg')} width={200} x={-50} y={800} />
      </Collage>
      <Autumm width={898} height={294} x={100} y={100} src={require('../../../assets/imgs/cuando-estamos-juntas/leaves.jpg')} />
    </Wrapper>
  );
}

export default CuandoEstamosJuntas;