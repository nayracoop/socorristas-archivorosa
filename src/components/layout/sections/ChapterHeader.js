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

  // padding-top: 7vh;
  display: flex;
  flex-flow: ${(props) => props.theme.align === "right" ? "row-reverse" : "row"} wrap;
  margin: 0 0 6em;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    flex-flow: column-reverse wrap;
  }

  // @media screen and (max-width: 1221px) {
  //   height: 93vh;
  //   flex-direction: column;
  //   flex-wrap: nowrap;
  //   align-items: center;
  //   margin-bottom: 10px;
  //   .container {
  //     max-height: 45vh;
  //   }
  //   @media screen and (max-width: 1221px) and (max-height: 700px) {
  //     height: unset;
  //     .container {
  //       max-height: unset;
  //     }
  //   }
  // }
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: ${(props) => props.theme.size};
  align-self: center;
  
  // padding: 5%;

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
    flex: 1 1 100vh;
    // min-height: 100vh;
  }

  // @media screen and (max-width: 1221px) {
  //   &.chapter-header-img-cont {
  //     max-height: 50vh;
  //     margin-bottom: 5vh;
  //     text-align: center;
  //   }
  //   .chapter-header-image {
  //     height: 100%;
  //     width: auto;
  //     height: auto;
  //     max-width: 100%;
  //     max-height: 100%;
  //   }
  // }
  // @media screen and (max-width: 1221px) and (max-height: 700px) {
  //   &.chapter-header-img-cont {
  //     max-height: unset;
  //     .chapter-header-image {
  //       height: unset;
  //       max-width: 100%;
  //     }
  //   }
  // }
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
    height: 100%;
    padding: 2em 0;
    
    // width: 100%;
    // height: 100vh;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;

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
  transform: translate3d(0,${props => props.theme.top}px,0);
  transition: transform 500ms ease-out;

  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    width: auto;
    left: 0;
    right: 0;
    height: calc(100% + 60px - 100vh);
    bottom: 0;
    top: auto;
  }

  z-index: -1;
  // @media screen and (max-width: 1221px) {
  //   left: 0;
  // }
`;

const ChapterHeader = (props) => {

  const bgTopPosition = useParallax(-0.15);
  // const textScrollY = useParallax(-0.35);
  console.log(props.theme.imagePosition)
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
      <HeaderBackground theme={ { ...props.theme, ...props.theme.background, top: bgTopPosition } } />
      <ScrollIndicator />
    </ChapterHeaderContainer>
  );
};

export default withTheme(ChapterHeader);
