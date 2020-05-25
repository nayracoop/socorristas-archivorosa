import React from 'react'
import styled from 'styled-components'
import CollagePiece from '../graphics/CollagePiece'
import { withTilt } from '../hoc/motion'

const Dome = styled(CollagePiece)`
  transform-origin: 64% 82%;
`;

const CongressDome = (props) => {
  return (
    <Dome {...props} />
  );
}

export default withTilt(CongressDome)