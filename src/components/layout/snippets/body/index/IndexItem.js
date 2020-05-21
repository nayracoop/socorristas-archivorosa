import React from "react";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import IndexImage from "./IndexImage";

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
  width: 60%;
  position: absolute;
  left:${(props) => (props.texthalign === "left" ? "50px" : "")};
  right:${(props) => (props.texthalign === "right" ? "50px" : "")};
  top:${(props) => (props.textvalign === "top" ? "150px" : "")};
  bottom:${(props) => (props.textvalign === "bottom" ? "150px" : "")};
  font-family: ${(props) => props.theme.fonts.display};
  font-size: 2.2em;
  line-height: 1.1em;
  color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => props.theme.colors.textOpacity};
  cursor:pointer;
  z-index 10000;
  transition: all ease-in .2s;

  :hover {
   opacity: ${(props) => props.theme.colors.textOpacity * 2};  
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
    <div>
      <QuoteContainer borderColor={props.borderColor}>
        <Quote
          to={props.href}
          textvalign={props.textvalign}
          texthalign={props.texthalign}
        >
          {props.content}
        </Quote>
      </QuoteContainer>
      <IndexImage align={props.imageAlign} image={props.image}></IndexImage>
      <IndexItemBackground background={props.background}></IndexItemBackground>
    </div>
  );
};

export default withTheme(indexItem);
