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
  border: ${(props) => props.borderColor !== "none" ? "1px solid " + props.theme.colors.text
    : "none"}
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
  z-index 10000;
  padding: 20px;
  
  &.pink{
    background-color: rgba(189,140,191,.5);
    background-size: 100%;
  }

   &.paper{
    background-image:url(${paperBackground});
    background-size: 100%;
    filter: drop-shadow(3px 4px 7px rgba(50,50,50,.7) );

  }
  
  :hover {
   opacity: ${(props) => props.theme.colors.textOpacity * 2};  
   color: ${(props) => props.theme.colors.text};
   text-decoration: none;


    &.paper{
    background-color: blue;
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
          texthalign={props.texthalign}
          className={props.quoteHighlight}
        >
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </Quote>
      </QuoteContainer>
      <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      <IndexItemBackground background={props.background}></IndexItemBackground>
    </ItemContainer>
  );
};

export default withTheme(indexItem);
