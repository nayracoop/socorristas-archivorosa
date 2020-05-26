import React from 'react';
import styled from 'styled-components'
import CollagePiece from '../graphics/CollagePiece'
import { withWind } from '../hoc/motion'

const Flower = styled(CollagePiece)`
  transform-origin: left 60%;
`

const Roses = (props) => {
  return (
    <Flower {...props} />
  );
}

export default withWind(Roses)