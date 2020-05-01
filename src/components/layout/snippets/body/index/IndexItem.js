import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IndexImage from './IndexImage'

const QuoteContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  left:10%;
  top:10%;
  padding: 10%;
  border: ${props => props.borderColor !== "none" ? "1px solid " + props.borderColor : "none"}
  border-radius: 10px;
  
`
const Quote = styled(Link)`
  width: 60%;
  position: absolute;
  left:${props => props.textHalign === "left" ? "50px" : ""};
  right:${props => props.textHalign === "right" ? "50px" : ""};
  top:${props => props.textValign === "top" ? "150px" : ""};
  bottom:${props => props.textValign === "bottom" ? "150px" : ""};
  font-family: ${props => props.theme.fonts.display};
  font-size: 2.2em;
  line-height: 1.1em;
  z-index 10000;
  opacity: 0.6;
  color: #000;
  cursor:pointer;
  transition: all ease-in .2s;

  :hover {
    color: #000;
    opacity: .9;
  }
`

const IndexItemBackground = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity:${props => props.background === 1 ? .3 : 0};
    background-color: #bd8cbf;
    z-index: -1;
`

const indexItem = (props) => {
  return (
    <div>
      <QuoteContainer borderColor={props.borderColor}>
        <Quote to={props.href} textValign={props.textValign} textHalign={props.textHalign}>
          {props.content}</Quote>
      </QuoteContainer>
      <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      <IndexItemBackground background={props.background}></IndexItemBackground>
    </div>
  );
}


export default indexItem