import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Collage from '../graphics/Collage'
import CollagePiece from '../graphics/CollagePiece'
import SingleFlower from '../movieclips/SingleFlower'
import BluePhone from '../movieclips/BluePhone'

const Wrapper = styled(Collage)`
  position: absolute;
  width: 100%;
  height: 100%;
  top:5%;
  left: 0;
`

const CollagePieceSmoothed = styled(CollagePiece)`
  transition-duration: 3000ms;
`

const CollageSmoothed = styled(Collage)`
transition-duration: 1200ms;
`

const Number = styled(CollagePiece)`
    position: absolute;
    width: 20%;
    top: 57%;
    left: 40%;
`


const UrgenciaRosa = (props) => {

  const scrollY = useParallax([-0.2, -0.15, 0.05, 0.04, 0.15, 0.4, 0.45, -0.25], -250, 250)

  return (
    <Wrapper width={822} height={681} className={props.className}>

      <CollageSmoothed width={411} height={681} x={300} y={0} style={{ transform: `translate3d(${scrollY[5] * -0.35}px,${scrollY[5]}px,0)` }}>
        <CollagePieceSmoothed src={require('../../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={54} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[3]}px,0)` }} />
        <CollagePieceSmoothed src={require('../../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={38} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[6]}px,0)` }} />
        <CollagePieceSmoothed src={require('../../../assets/imgs/urgencia-rosa/yellow_flower_1.jpg')} width={53} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[5]}px,0)` }} />
      </CollageSmoothed>

      <CollageSmoothed width={411} height={681} x={600} y={200} style={{ transform: `translate3d(0,${scrollY[6]}px,0)` }}>
        <CollagePieceSmoothed src={require('../../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={38} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[5]}px,0)` }} />
        <CollagePiece src={require('../../../assets/imgs/urgencia-rosa/yellow_flower_2.jpg')} width={60} x={0} y={0} />
        <CollagePieceSmoothed src={require('../../../assets/imgs/urgencia-rosa/yellow_flower_1.jpg')} width={44} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }} />
      </CollageSmoothed>

      <Collage width={822} height={681} x={430} y={20} style={{ transform: `translate3d(${scrollY[3] * -1}px,${scrollY[4]}px,0)` }} >
        <SingleFlower src={require('../../../assets/imgs/urgencia-rosa/flowers_1.jpg')} width={209} x={0} y={0} origin="right top" />
      </Collage>

      <Collage width={822} height={681} x={300} y={0} style={{ transform: `translate3d(${scrollY[3]}px,${scrollY[4]}px,0)` }}>
        <SingleFlower src={require('../../../assets/imgs/urgencia-rosa/flowers_2.jpg')} width={110} x={0} y={0} origin="10% top" delay="-2.9s" />
      </Collage>

      <Collage width={822} height={681} x={200} y={250} style={{ transform: `translate3d(0,${scrollY[0]}px,0)` }}>
        <BluePhone width={395} height={432} x={0} y={0} />
      </Collage>

      <Number opaque={true} src={require('../../../assets/imgs/urgencia-rosa/number.jpg')} width={200} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[7]}px,0)` }} />
    </Wrapper>
  );
}

export default UrgenciaRosa // withSwinging(PhoneFlowers, { duration: '3s', swinging: -1 });