import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'

const Piece = styled(AlphaMatteImg)`
  position: absolute;
  width: ${props => props.theme.width}%;
  height: auto;
  left: ${props => props.theme.left}%;
  top: ${props => props.theme.top}%;
  transition: transform 800ms ease-out;
`;

const CollagePiece = (props) => {
  const proportionalX = props.containerWidth ? 100 * props.x / props.containerWidth : props.x
  const proportionalY = props.containerHeight ? 100 * props.y / props.containerHeight : props.y
  const proportionalWidth = props.containerWidth ? 100 * props.width / props.containerWidth : props.width
  
  return (
    <Piece {...props} theme={ {...props.theme, width: proportionalWidth, top: proportionalY, left: proportionalX } } />
  )
}

export default CollagePiece;