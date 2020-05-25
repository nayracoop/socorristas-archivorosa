import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'

const Piece = styled(AlphaMatteImg)`
  position: absolute;
  width: ${props => props.width}%;
  height: auto;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
`;

const CollagePiece = (props) => {
  const proportionalX = props.x / props.containerWidth
  const proportionalY = props.y / props.containerHeight
  const proportionalWidth = props.width / props.containerWidth
  return (
    <Piece {...props} theme={ {...props.theme, width: proportionalWidth, top: proportionalY, left: proportionalX } } />
  );
}

export default CollagePiece;