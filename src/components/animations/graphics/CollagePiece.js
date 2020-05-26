import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './AlphaMatteImg'
import AlphaMatteSprite from './AlphaMatteSprite'

const Piece = styled(AlphaMatteImg)`
  position: absolute;
  width: ${props => props.theme.width};
  height: auto;
  left: ${props => props.theme.left};
  top: ${props => props.theme.top};
  transition: transform 800ms ease-out;
`;

const SpritePiece = styled(AlphaMatteSprite)`
  position: absolute;
  width: ${props => props.theme.width};
  left: ${props => props.theme.left};
  top: ${props => props.theme.top};
  transition: transform 800ms ease-out;
`;

const CollagePiece = (props) => {
  const { x = 0, y = 0 } = props
  const proportionalX = props.containerWidth ? (100 * x / props.containerWidth) + '%' : x + 'px'
  const proportionalY = props.containerHeight ? (100 * y / props.containerHeight) + '%' : y + 'px'
  const proportionalWidth = props.containerWidth ? (100 * props.width / props.containerWidth) + '%' : props.width + 'px'
  const proportionalHeight = props.height && props.width ? (100 * props.height / props.width) + '%' : ''
  
  if(props.sprite === true) return (<SpritePiece {...props} theme={ { width: proportionalWidth, top: proportionalY, left: proportionalX } } />)
  else return (<Piece {...props} theme={ { width: proportionalWidth, top: proportionalY, left: proportionalX } } />)

}

export default CollagePiece;