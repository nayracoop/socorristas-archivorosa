import React from "react";
import ReactMarkdown from "react-markdown";
import styled, { withTheme } from "styled-components";
import HomeBtn from "../layout/snippets/header/HomeBtn";
import ChapterHeader from "../layout/sections/ChapterHeader";
import ChapterNav from "../layout/snippets/nav/ChapterNav";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const Content = styled.article`
  max-width: ${(props) => props.theme.articleMaxWidth}px;
  margin: 50px auto;
  font-size: 1.3125em;
  align-self: center;
  p {
    margin-top: 1.5em;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 25px;
`;

const Post = (props) => {
  return (
    <Wrapper>
      <HomeBtn
      href="/"
      btnText="Inicio"
      class="shaded"
      />
      <ChapterHeader
        theme={{ ...props.theme, ...props.data.theme.header }}
        title={props.data.title}
        author={props.data.meta.author}
        info={props.data.meta.group}
        date={props.data.date}
        titleSize="48"
        image={props.headerImage}
        scrollText="Scrolleá hacia abajo para conocer los relatos"
        >
      </ChapterHeader>
      <ContentWrapper className="oooo">
        <Content>
          <ReactMarkdown source={props.data.content} /> 
        </Content>
        <ChapterNav/>
      </ContentWrapper>
    </Wrapper>
  );
};

export default withTheme(Post);
