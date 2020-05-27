import React from "react";
import styled, { withTheme } from "styled-components";
import { useParallax } from '../../animations/hooks/parallax'

import ChapterTitle from "../snippets/header/ChapterTitle";
import ChapterHeaderImage from "../snippets/header/ChapterHeaderImage";
import ScrollIndicator from "../snippets/header/ScrollIndicator";

const ChapterHeaderContainer = styled.header`
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

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    flex-flow: column-reverse nowrap;
    width: 100vw;
    // overflow: hidden;
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

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: 100vw;
    flex: 1 1 auto;
    // overflow-x: hidden;
    // overflow-y: visible;
  }
`;

const Image = styled(ChapterHeaderImage)`
  position: absolute;
  top: ${(props) => props.theme.top ? props.theme.top : "auto" };
  right: ${(props) => props.theme.right ? props.theme.right : "auto" };
  bottom: ${(props) => props.theme.bottom ? props.theme.bottom : "auto" };
  left: ${(props) => props.theme.left ? props.theme.left : "auto" };

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    margin: 0 auto;
    width:80%;
    ${(props) => props.theme.responsiveSize ? `
      max-width: ${props.theme.responsiveSize.maxWidth};
      min-width: ${props.theme.responsiveSize.minWidth};
      transform: translateX(${window.innerWidth-parseInt(props.theme.responsiveSize.minWidth) < 0 ? Math.floor((window.innerWidth-parseInt(props.theme.responsiveSize.minWidth))/2+parseInt(props.theme.responsiveSize.offsetX)) : parseInt(props.theme.responsiveSize.offsetX) }px) translateY(${props.theme.responsiveSize.offsetY});
      margin-top: ${props.theme.responsiveSize.marginVertical};
      margin-bottom: ${props.theme.responsiveSize.marginVertical};
      justify-content: ${props.theme.responsiveSize.justify};
    ` : ''}

    // height: 100%;
    padding: 2em 0 0;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    // height: 100vh;

  }
`;

const HeaderBackground = styled.div`
  position: absolute;
  left: ${(props) => (props.theme.align === "left" ? 0 : "auto")};
  right: ${(props) => (props.theme.align === "right" ? 0 : "auto")};
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

const ChapterHeader = (props) => {

  const scrollY = useParallax(-0.15);
  
  return (
    <ChapterHeaderContainer>
      <Header theme={{...props.theme.content, pageWidth: {...props.theme.pageWidth}}}>
        <TextColumn theme={{...props.theme.content, pageWidth: {...props.theme.pageWidth}}}> {/*className="container">*/}
          <ChapterTitle
            title={props.title}
            author={props.author}
            info={props.info}
            date={props.date}
            titleSize={props.titleSize}
          ></ChapterTitle>
        </TextColumn>
        <ImageColumn theme={ { ...props.theme, size: props.theme.content.size.substr(-1) === '%' ? (100-parseInt(props.theme.content.size)) + '%' : 'auto', pageWidth: {...props.theme.pageWidth} } } className="---container ---chapter-header-img-cont">
          <Image image={props.image} theme={{...props.theme.imagePosition, pageWidth: {...props.theme.pageWidth}}} />
        </ImageColumn>
      </Header>
      <HeaderBackground theme={ { ...props.theme, ...props.theme.background } } style={{transform: `translate3d(0,${scrollY}px,0)`}} />
      <ScrollIndicator />
    </ChapterHeaderContainer>
  );
};

export default withTheme(ChapterHeader);
