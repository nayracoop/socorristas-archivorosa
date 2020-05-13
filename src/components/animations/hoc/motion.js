import React from 'react'
import styled, { keyframes } from 'styled-components'

export const withFlutter = (Component, settings = {}) => {
  const { duration = '1.5s', x = 0, y = 1, z = 0 } = settings;
  const animation = keyframes`
    0% { transform: rotate3d(${x},${y},${z},75deg) skew(${10*y}deg, 0deg); filter: brightness(60%); }
    100% { transform: rotate3d(${x},${y},${z},0deg); filter: brightness(100%); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withFloat = (Component, settings = {}) => {
  const { duration = '4s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: translate3d(0,${offset},0); }
    100% { transform: translate3d(0,-${offset},0); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withWind = (Component, settings = {}) => {
  const { duration = '3s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: skew(1deg, -2deg) rotate3d(0,1,0,3deg); }
    100% { transform: skew(-1deg, 2deg) rotate3d(0,1,0,-3deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withBeat = (Component, settings = {}) => {
  const { duration = '1.5s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: scale(1); }
    15% { transform: scale(1.03) rotateX(8deg); }
    25% { transform: scale(1); }
    35% { transform: scale(1.025) rotateX(8deg); }
    45% { transform: scale(1.01); }
    100% { transform: scale(1); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  `
  return props => (<AnimatedComponent {...props} />)
}

export const withBeat2 = (Component, settings = {}) => {
  const { duration = '1.5s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: rotateY(0deg); }
    15% { transform: rotateY(8deg); }
    25% { transform: rotateY(0deg); }
    35% { transform: rotateY(8deg); }
    45% { transform: rotateY(5deg); }
    100% { transform: rotateY(0deg); }
  `;
  const AnimatedComponent = styled(Component)`
    animation-name: ${animation};
    animation-duration: ${duration};
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  `
  return props => (<AnimatedComponent {...props} />)
}