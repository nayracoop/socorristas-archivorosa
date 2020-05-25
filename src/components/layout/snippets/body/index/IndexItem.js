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
  z-index: 10000;
  cursor:pointer;
  padding: 20px;

  &.pink{
    span{
      background: linear-gradient(to right, rgba(189,140,191,.7), rgba(189,140,191,.6));
      background-repeat: no-repeat;
      padding: 5px 10px 8px 20px;
      margin-top:-10px;
      transition: all ease-out .7s;

         &.line0{
          margin-left: -50px;
          background-position: -700px;
        }
        &.line1{
          margin-left: 10px;
          background-position: -600px;
        }
        &.line2{
          margin-left:-30px;
          background-position:-500px;
        }
        &.line3{
          margin-left: -5px;
          background-position:-800px;
        }

      &:hover {
        &.line0{
          background-position: 1px;
        }
        &.line1{
          background-position: 1px;
        }
        &.line2{
          background-position:1px;
        }
        &.line3{
          background-position:1px;
        }
      }
      }
    
    }
  }

  &.paper{
    background-image:url(${paperBackground});
    background-size: 100%;
    filter: drop-shadow(3px 4px 7px rgba(50,50,50,.7));
  }
  
  :hover {
   opacity: ${(props) => props.theme.colors.textOpacity * 2};  
   color: ${(props) => props.theme.colors.text};
   text-decoration: none;
  }

  span{
    display:inline-block;
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
          texthalign={props.texthalign}
          className={props.quoteHighlight}
        >
          {props.content.map(
            (excerpt, i) => {
              return (
                <span width={20 + excerpt.line.length * 10} className={"line" + i} key={i} > {excerpt.line}</span>
              )
            }
          )}
        </Quote>
      </QuoteContainer>
      <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      <IndexItemBackground background={props.background}></IndexItemBackground>
    </ItemContainer >
  );
};

export default withTheme(indexItem);
