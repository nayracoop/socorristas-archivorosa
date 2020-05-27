import React from 'react'
import styled from 'styled-components'
import { useParallax } from './hooks/parallax'
import Collage from './graphics/Collage'
import CollagePiece from './graphics/CollagePiece'
import SingleFlower from './movieclips/SingleFlower'
import BluePhone from './movieclips/BluePhone'

const CollagePieceSmoothed = styled(CollagePiece)`
  transition-duration: 3000ms;
`

const CollageSmoothed = styled(Collage)`
transition-duration: 1200ms;
`

const PhoneFlowers = (props) => {

  const scrollY = useParallax([-0.2, -0.15, 0.05, 0.04, 0.15, 0.4, 0.45, -0.25], -250, 250)

  return (
    <Collage width={822} height={681} className={props.className}>
      <CollageSmoothed width={411} height={681} x={0} y={0} style={{ transform: `translate3d(${scrollY[5]*-0.35}px,${scrollY[5]}px,0)`}}>
        <CollagePieceSmoothed src={require('../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={54} x={81} y={266} style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}} />
        <CollagePieceSmoothed src={require('../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={38} x={0} y={340} style={{ transform: `translate3d(0,${scrollY[6]}px,0)`}} />
        <CollagePieceSmoothed src={require('../../assets/imgs/urgencia-rosa/yellow_flower_1.jpg')} width={53} x={0} y={186} style={{ transform: `translate3d(0,${scrollY[5]}px,0)`}} />
      </CollageSmoothed>
      <CollageSmoothed width={411} height={681} x={411} y={0} style={{ transform: `translate3d(0,${scrollY[6]}px,0)`}}>
        <CollagePieceSmoothed src={require('../../assets/imgs/urgencia-rosa/red_flower.jpg')} width={38} x={321} y={567} style={{ transform: `translate3d(0,${scrollY[5]}px,0)`}} />
        <CollagePiece src={require('../../assets/imgs/urgencia-rosa/yellow_flower_2.jpg')} width={60} x={351} y={397} />
        <CollagePieceSmoothed src={require('../../assets/imgs/urgencia-rosa/yellow_flower_1.jpg')} width={44} x={194} y={614} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
      </CollageSmoothed>
      <Collage width={822} height={681} x={0} y={0} style={{ transform: `translate3d(${scrollY[3]*-1}px,${scrollY[4]}px,0)`}} >
        <SingleFlower src={require('../../assets/imgs/urgencia-rosa/flowers_1.jpg')} width={209} x={30} y={17} origin="right top" />
      </Collage>
      <Collage width={822} height={681} x={0} y={0} style={{ transform: `translate3d(${scrollY[3]}px,${scrollY[4]}px,0)`}}>
        <SingleFlower src={require('../../assets/imgs/urgencia-rosa/flowers_2.jpg')} width={110} x={642} y={248} origin="10% top" delay="-2.9s" />
      </Collage>
      <Collage width={822} height={681} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[0]}px,0)`}}>
        <CollagePiece src={require('../../assets/imgs/urgencia-rosa/red_phone_cable_2.jpg')} width={264} x={174} y={0} style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}} />
        <BluePhone width={395} height={432} x={357} y={181} />
        <CollagePiece src={require('../../assets/imgs/urgencia-rosa/red_phone_cable_1.jpg')} width={160} x={278} y={486} style={{ transform: `translate3d(0,${scrollY[3]}px,0)`}} />
        <CollagePiece src={require('../../assets/imgs/urgencia-rosa/red_phone_body.jpg')} width={251} x={50} y={433} style={{ transform: `translate3d(0,${scrollY[2]}px,0)`}} />
      </Collage>
      <CollagePiece opaque={true} src={require('../../assets/imgs/urgencia-rosa/number.jpg')} width={87} x={219} y={285} style={{ transform: `translate3d(0,${scrollY[7]}px,0)`}} />
    </Collage>
  );
}

export default PhoneFlowers // withSwinging(PhoneFlowers, { duration: '3s', swinging: -1 });