import React from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% { transform: translate3d(0,15px,0); }
  100% { transform: translate3d(0,-15px,0); }
`;

const Wrapper = styled.div`
  animation: ${float}  ${props => props.theme.duration} ease-in-out alternate infinite;
`

const Float = (props) =>{
  const { duration = '4s' } = props
  return (
    <Wrapper theme={ { duration } } className={props.className}>{props.children}</Wrapper>
  );
}

export default Float