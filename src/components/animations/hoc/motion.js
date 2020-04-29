import React from 'react'
import styled, { keyframes } from 'styled-components'

export const withFlutter = (Component, settings = {}) => {
  const { duration = '2s', x = 0, y = 1, z = 0 } = settings;
  const animation = keyframes`
    0% { transform: rotate3d(${x},${y},${z},75deg) skew(${10*y}deg, 0deg); filter: brightness(60%); }
    100% { transform: rotate3d(${x},${y},${z},0deg); filter: brightness(100%); }
  `;
  const AnimatedComponent = styled(Component)`
    animation: ${animation} ${duration} ease-in-out alternate infinite;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withFloat = (Component, settings = {}) => {
  const { duration = '4s' } = settings;
  const animation = keyframes`
    0% { transform: translate3d(0,115px,0); }
    100% { transform: translate3d(0,-115px,0); }
  `;
  const AnimatedComponent = styled(Component)`
    animation: ${animation} ${duration} ease-in-out alternate infinite;
  `
  return props => (<AnimatedComponent {...props} />)
}