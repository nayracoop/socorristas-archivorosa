import React from "react";
import styled, { withTheme } from "styled-components";

import ChapterTitle from "../snippets/header/ChapterTitle";
import ChapterHeaderImage from "../snippets/header/ChapterHeaderImage";
import ScrollIndicator from "../snippets/header/ScrollIndicator";

const ChapterHeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-top: 7vh;
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

const Text = styled.div`
  flex: 1;
  align-self: center;
  padding: 5%;
`;

const Image = styled.div`
  flex: 1;
  height: 100%;
  max-height: 100%;
  @media screen and (max-width: 1221px) {
    &.chapter-header-img-cont {
      max-height: 50vh;
      margin-bottom: 5vh;
      text-align: center;
    }
    .chapter-header-image {
      height: 100%;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  @media screen and (max-width: 1221px) and (max-height: 700px) {
    &.chapter-header-img-cont {
      max-height: unset;
      .chapter-header-image {
        height: unset;
        max-width: 100%;
      }
    }
  }
`;

const HeaderBackground = styled.div`
  position: absolute;
  left: ${(props) => (props.theme.align === "left" ? 0 : "auto")};
  right: ${(props) => (props.theme.align === "right" ? 0 : "auto")};
  top: 0;
  bottom: 0;
  width: 50%;
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
    <ChapterHeaderContainer theme={props.theme.content}>
      <Text className="container">
        <ChapterTitle
          title={props.title}
          author={props.author}
          info={props.info}
          date={props.date}
          titleSize={props.titleSize}
        ></ChapterTitle>
      </Text>
      <Image className="container chapter-header-img-cont">
        <ChapterHeaderImage image={props.image}></ChapterHeaderImage>
      </Image>
      <HeaderBackground theme={ { ...props.theme, ...props.theme.background } } />
      <ScrollIndicator />
    </ChapterHeaderContainer>
  );
};

export default withTheme(ChapterHeader);
