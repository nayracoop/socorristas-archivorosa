import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import IndexImage from "./IndexImage";

const paperBackground = require('../../../../../assets/imgs/background.png');

const ItemContainer = styled.div`
  width:100%;
  overflow-x: hidden;
`

const QuoteContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  left:10%;
  top:10%;
  padding: 10%;
  border: ${(props) => props.borderColor !== "none" ? "1px solid " + props.theme.colors.text : "none"}
  border-radius: 10px;
  
`;
const Quote = styled(Link)`
  position: absolute;
  left:${(props) => (props.texthalign === "left" ? "50px" : "")};
  right:${(props) => (props.texthalign === "right" ? "50px" : "")};
  top:${(props) => (props.textvalign === "top" ? "50px" : "")};
  bottom:${(props) => (props.textvalign === "bottom" ? "50px" : "")};
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 2em;
  line-height: 1.3em;
  color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => props.theme.colors.textOpacity};
  cursor:pointer;
  padding: 20px; 
  z-index: 10000;

  span{
    display:block;
    background: linear-gradient(to right , rgba(189,140,191,.7), rgba(189,140,191,.2));
    background-repeat: no-repeat;
    padding: 5px 30px 8px 10px;
    margin-top:-10px;
    transition: all ease-in-out .5s;
    background-position: -700px;     

    &.line0{
      margin-left: -50px; 
      font-size: 1em;
      line-height: 1em;         
    }
    &.line1{
      margin-left: 10px;
      font-size: 1.2em;  
      line-height: 1em; 
    }
    &.line2{
      margin-left:-30px;
      font-size: 1em;  
      line-height: 1em; 
    }
    &.line3{
      margin-left: -5px;
      font-size: 1.5em;  
      line-height: 1em; 
    }
    &.line4{
      margin-left: 20px;
      font-size: 1em;  
      line-height: 1em; 
    }
  }

    &:hover{
      text-decoration:none;
      color: ${(props) => props.theme.colors.text};
      opacity: ${(props) => props.theme.colors.textOpacity * 2};
      
      span{
         background-position: 0px;
          &.line1{
           transition-delay: .2s
          }
          &.line2{
           transition-delay: .4s 
          }
          &.line3{
           transition-delay: .6s 
          }
          &.line4{
           transition-delay: .8s 
          }
        }  
      }  
    }
  }
`;

const IndexItemBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: ${(props) => props.background === 1 ? props.theme.colors.backgroundOpacity : 0};
  background-color: ${(props) => props.theme.colors.background};
  z-index: -1;
`;

const indexItem = (props) => {
  return (
    <ItemContainer>
      <QuoteContainer borderColor={props.borderColor}>
        <Quote
          to={props.href}
          textvalign={props.textvalign}
          texthalign={props.texthalign}>
          {
            props.content.map(
              (excerpt, i) => {
                return (
                  <span style={{ width: 200 + excerpt.line.length * 10 + 'px' }} className={"line" + i} key={i} >
                    {excerpt.line}
                  </span>
                )
              }
            )
          }
        </Quote>
      </QuoteContainer>
      <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      <IndexItemBackground background={props.background}></IndexItemBackground>
    </ItemContainer >
  );
};

export default withTheme(indexItem);
