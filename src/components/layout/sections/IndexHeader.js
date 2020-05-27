import React from "react";
import styled, { withTheme } from "styled-components";
import { useParallax } from '../../animations/hooks/parallax'

import IndexTitle from "../snippets/header/IndexTitle";
import ScrollIndicator from "../snippets/header/ScrollIndicator";

const IndexHeaderContainer = styled.header`
  position: relative;
  height: 100vh;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Header = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 0 6em;

  display: flex;
  flex-flow: ${(props) => props.theme.align === "right" ? "row-reverse" : "row"} wrap;
  align-content: center;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    flex-flow: column-reverse nowrap;
    width: 100vw;
    overflow: hidden;
  }
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: ${(props) => props.theme.size};
  align-self: center;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: none;
    flex: 1 1 auto;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  max-width: ${(props) => props.theme.size};
  position: relative;
  display: flex;
  height: 100vh;
  align-items: center;
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    height: unset;
    max-width: 100vw;
    flex: 1 1 auto;
    // overflow-x: hidden;
    // overflow-y: visible;
  }
`;

const Image = styled.img`
  position: absolute;
  top: ${(props) => props.theme.top ? props.theme.top : "auto"};
  right: ${(props) => props.theme.right ? props.theme.right : "auto"};
  bottom: ${(props) => props.theme.bottom ? props.theme.bottom : "auto"};
  left: ${(props) => props.theme.left ? props.theme.left : "auto"};
  width: 90%;
  margin-bottom: 150px;
  left: 25%;
  z-index: 200;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    margin: 0 auto;
    width: 60%;
    ${(props) => props.theme.responsiveSize ? `
      max-width: ${props.theme.responsiveSize.maxWidth};
      min-width: ${props.theme.responsiveSize.minWidth};
      transform: translateX(${window.innerWidth - parseInt(props.theme.responsiveSize.minWidth) < 0 ? Math.floor((window.innerWidth - parseInt(props.theme.responsiveSize.minWidth)) / 2 + parseInt(props.theme.responsiveSize.offsetX)) : parseInt(props.theme.responsiveSize.offsetX)}px) translateY(${props.theme.responsiveSize.offsetY});
      margin-top: ${props.theme.responsiveSize.marginVertical};
      margin-bottom: ${props.theme.responsiveSize.marginVertical};
      justify-content: ${props.theme.responsiveSize.justify};
    ` : ''}
    
    @media (min-width: ${props => props.theme.pageWidth.l}px) and (max-width: ${props => props.theme.pageWidth.xl}px) {
      width: 50%;
    }
    @media (max-width: ${props => props.theme.pageWidth.s}px) {
      width: 90%;
      margin-top: 4vh;
    }
    // height: 100%;
    padding: 2em 0 0;

    display: flex;
    flex-flow: row;
    justify-content: center;
    //align-items: center;
    // height: 100vh;

`;

const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  width: ${(props) => props.theme.size};
  opacity: ${(props) => props.theme.colors.backgroundOpacity} ;
  background-color: ${(props) => props.theme.colors.background} ;
  transition: transform 500ms ease-out;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    width: auto;
    left: 0;
    right: 0;
    height: 45%;
    bottom: 0;
    top: auto;
  }
  z-index: -1;
`;

const IndexHeader = (props) => {

  const scrollY = useParallax(-0.15);

  return (
    <IndexHeaderContainer>
      <Header theme={{ pageWidth: { ...props.theme.pageWidth } }}>
        <ImageColumn theme={{ ...props.theme, size: props.theme.content.size.substr(-1) === '%' ? (100 - parseInt(props.theme.content.size)) + '%' : 'auto', pageWidth: { ...props.theme.pageWidth } }}>
          <Image src={props.image} theme={{ ...props.theme.imagePosition, pageWidth: { ...props.theme.pageWidth } }} />
        </ImageColumn>
        <TextColumn theme={{ ...props.theme.content, pageWidth: { ...props.theme.pageWidth } }}>
          <IndexTitle
            titleSize={props.titleSize}
            titleLine1={props.titleLine1}
            titleLine2={props.titleLine2}
          ></IndexTitle>
        </TextColumn>
      </Header>
      <HeaderBackground theme={{ ...props.theme, ...props.theme.background }} style={{ transform: `translate3d(0,${scrollY}px,0)` }} />
      <ScrollIndicator />
    </IndexHeaderContainer>
  );
};

export default withTheme(IndexHeader);
