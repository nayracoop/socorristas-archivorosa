import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: ${props => props.width}px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: ${props => 100*props.height/props.width}%;
  }
`

const Collage = (props) => {
  const pieces = React.Children.map(props.children, child => (
    React.cloneElement(child, { containerWidth: props.width, containerHeight: props.height })
  )) 
  return (
    <Wrapper className={props.className} width={props.width} height={props.height}>
      {pieces}
    </Wrapper>
  );
}

export default Collage;