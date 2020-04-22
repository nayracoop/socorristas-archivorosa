import React from 'react'
import styled from 'styled-components'
import IndexImage from './IndexImage'

const QuoteContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  left:10%;
  top:10%;
  padding: 10%;
  border: ${props => props.borderColor !== "none" ? "1px solid " + props.borderColor : "none" }
  border-radius: 10px;
  
`
const Quote = styled.h1`
  width: 60%;
  position: absolute;
  left:${props => props.textHalign === "left" ? "1%" : ""};
  right:${props => props.textHalign === "right" ? "1%" : ""};
  top:${props => props.textValign === "top" ? "20%" : ""};
  bottom:${props => props.textValign === "bottom" ? "20%" : ""};
  font-family: ${props => props.theme.fonts.display};
  font-size: 42px;
  z-index 10;
`
const indexItem = (props) => {
    return(
      <div>
          <QuoteContainer borderColor = {props.borderColor}>
            <Quote textValign={props.textValign} textHalign={props.textHalign}>
              {props.content}</Quote>
          </QuoteContainer>
          <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      </div>
    );
}


export default indexItem