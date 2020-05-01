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
  const { duration = '1s', offset = '15px' } = settings;
  const animation = keyframes`
    0% { transform: scale(0) translate3d(-130px,${offset},0) skew(-45deg, 0deg)  }
    100% { transform: scale(1) translate3d(0,-${offset},0) skew(0deg, 0deg)  }
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