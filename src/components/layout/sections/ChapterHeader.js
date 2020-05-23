import React from "react";
import styled, { withTheme } from "styled-components";

import ChapterTitle from "../snippets/header/ChapterTitle";
import ChapterHeaderImage from "../snippets/header/ChapterHeaderImage";
import ScrollIndicator from "../snippets/header/ScrollIndicator";

const ChapterHeaderContainer = styled.header`
  position: relative;
  height: 100vh;
`;

const Header = styled.div`
  position: relative;
  height: 100%;
  
  // padding-top: 7vh;
  display: flex;
  flex-flow: ${(props) => props.theme.align === "right" ? "row-reverse" : "row"} wrap;
  margin: 0 0 6em;
  @media screen and (max-width: 1221px) {
    height: 93vh;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 10px;
    .container {
      max-height: 45vh;
    }
    @media screen and (max-width: 1221px) and (max-height: 700px) {
      height: unset;
      .container {
        max-height: unset;
      }
    }
  }
`;

const TextColumn = styled.div`
  flex: 1;
  max-width: ${(props) => props.theme.size};
  align-self: center;
  // padding: 5%;
`;

const ImageColumn = styled.div`
  flex: 1;
  max-width: ${(props) => props.theme.size};
  position: relative;

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
  left: 0;
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
  z-index: -1;
  @media screen and (max-width: 1221px) {
    left: 0;
  }
`;

const ChapterHeader = (props) => {
  console.log(props.theme)
  return (
    <ChapterHeaderContainer>
      <Header theme={props.theme.content}>
        <TextColumn theme={props.theme.content}> {/*className="container">*/}
          <ChapterTitle
            title={props.title}
            author={props.author}
            info={props.info}
            date={props.date}
            titleSize={props.titleSize}
          ></ChapterTitle>
        </TextColumn>
        <ImageColumn theme={ { ...props.theme, size: props.theme.content.size.substr(-1) === '%' ? (100-parseInt(props.theme.content.size)) + '%' : 'auto' } } className="---container ---chapter-header-img-cont">
          <Image image={props.image} />
        </ImageColumn>
      </Header>
      <HeaderBackground theme={ { ...props.theme, ...props.theme.background } } />
      <ScrollIndicator />
    </ChapterHeaderContainer>
  );
};

export default withTheme(ChapterHeader);
