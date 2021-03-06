import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.theme.width};
  max-width: 100%;
  position: ${props => props.theme.position};
  ${props => (props.theme.left !== '' && props.theme.top !== '') ? `
  left: ${props.theme.left};
  top: ${props.theme.top};
  ` : ''}
  ${props => (props.theme.height === '') ? `
  ::before {
    content: "";
    display: block;
    padding-top: ${props.theme.paddingTop};
  }
  ` : `height: ${props.theme.height};` }
  transition: transform 800ms ease-out;
`

const Collage = (props) => {

  const position = props.containerWidth ? 'absolute' : 'relative'
  const proportionalX = props.containerWidth ? (100 * props.x / props.containerWidth) + '%' : (props.x ? props.x + 'px' : '')
  const proportionalY = props.containerHeight ? (100 * props.y / props.containerHeight) + '%' : (props.y ? props.y + 'px' : '')
  const proportionalWidth = props.containerWidth ? (100 * props.width / props.containerWidth) + '%' : props.width + 'px'
  const proportionalHeight = props.containerHeight ? (100 * props.height / props.containerHeight) + '%' : ''
  const paddingTop = 100*props.height/props.width + '%'
  const pieces = React.Children.map(props.children, child => (
    React.cloneElement(child, { containerWidth: props.width, containerHeight: props.height })
  )) 

  return (
    <Wrapper className={props.className} style={props.style} theme={ { paddingTop, position, height: proportionalHeight, width: proportionalWidth, top: proportionalY, left: proportionalX } }>
      {pieces}
    </Wrapper>
  );
}

export default Collage;