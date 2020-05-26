import React from 'react';
import styled from 'styled-components'
import { withSpin, withRails, withBlastOff, withFlightHorizontal, withFlight } from '../hoc/motion'
import AlphaMatteSprite from '../graphics/AlphaMatteSprite'
import CollagePiece from '../graphics/CollagePiece'

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
`

const FlyingBird = (props) => {
  return (
    <CollagePiece {...props} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} frames={3} />
  );
}

export default (withFlight(FlyingBird));//withBlastOff(withRails(withFloatingWrap(FlyingBird)))