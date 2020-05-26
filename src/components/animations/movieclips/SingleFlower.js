import React from 'react'
import styled from 'styled-components'
import CollagePiece from '../graphics/CollagePiece'
import { withSwinging } from '../hoc/motion'

const Flower = styled(CollagePiece)`
  transform-origin: ${props => props.origin ? props.origin : '15% bottom'};
  ${props => props.delay ? `animation-delay: ${props.delay};` : ''}
`;

const SingleFlower = (props) => {
  return (
    <Flower {...props} />
  );
}

export default withSwinging(SingleFlower)