import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { withTheme } from "styled-components";
import ChapterHeader from "../layout/sections/ChapterHeader";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const Content = styled.article`
  max-width: ${(props) => props.theme.articleMaxWidth}px;
  margin: 50px auto 200px;
  font-size: 1.3125em;
  align-self: center;
  p {
    margin-top: 1.5em;
  }
`;

const Post = (props) => {
  return (
    <Wrapper>
      <ChapterHeader
        theme={{ ...props.theme, ...props.data.theme.header }}
        title={props.data.title}
        author={props.data.meta.author}
        info={props.data.meta.group}
        date={props.data.date}
        titleSize="48"
        image={props.headerImage}
        scrollText="Scrolleá hacia abajo para leer el relato">
      </ChapterHeader>
      <Content>
        <ReactMarkdown source={props.data.content} />
      </Content>
    </Wrapper>
  );
};

export default withTheme(Post);
