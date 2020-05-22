import React from "react";
import styled, { withTheme } from "styled-components";

import ChapterTitle from "../snippets/header/ChapterTitle";
import ChapterHeaderImage from "../snippets/header/ChapterHeaderImage";
import ScrollIndicator from "../snippets/header/ScrollIndicator";

const ChapterHeaderContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: ${(props) => props.theme.align === "right" ? "row-reverse" : "row"} wrap;
  margin: 0 0 6em;
`;

const Text = styled.div`
  flex: 1;
  align-self: center;
  padding: 5%;
`;

const Image = styled.div`
  flex: 1;
  height: 100%;
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
`;

const ChapterHeader = (props) => {
  console.log(props.theme)
  return (
    <ChapterHeaderContainer theme={props.theme.content}>
      <Text>
        <ChapterTitle
          title={props.title}
          author={props.author}
          info={props.info}
          date={props.date}
          titleSize={props.titleSize}
        ></ChapterTitle>
      </Text>
      <Image>
        <ChapterHeaderImage image={props.image}></ChapterHeaderImage>
      </Image>
      <HeaderBackground theme={ { ...props.theme, ...props.theme.background } } />
      <ScrollIndicator />
    </ChapterHeaderContainer>
  );
};

export default withTheme(ChapterHeader);
