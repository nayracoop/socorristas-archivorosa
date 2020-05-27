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
  @media screen and (max-width: 1221px) {
    h1 {
      line-height: 1.05;
      font-size: 2.8rem;
    }
  }    
`;

const Content = styled.div`
  max-width: ${(props) => props.theme.articleMaxWidth}px;
  margin: 10em auto 3em;
  font-size: 1.3125em;
  align-self: center;
  // @media screen and (max-width: 1221px) {
    //   margin-top: 10px;
    // }    
  p {
    margin-top: 1.5em;

    strong {
      background: linear-gradient(to right , rgba(189,140,191,.7), rgba(189,140,191,.4));
      background-repeat: no-repeat;
      padding: 5px;
      transition: all ease-in-out 1s;  
      background-position: -1500px;

      &:hover{
      background-position: 0px;
      text-decoration:none;
      color: ${(props) => props.theme.colors.text};
      opacity: ${(props) => props.theme.colors.textOpacity * 2};
      
    }
  }
    
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    padding: 0 30px;
    margin-top: 1em;
  }
`;

const ContentWrapper = styled.div`
  margin-bottom: 2em;
  width: 100%;
`;

const Article = styled.article`
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    overflow: hidden;
  } 
`;
 
const Post = (props) => {
  return (
    <Wrapper>
      <HomeBtn
        href="/"
        btnText="Inicio"
        class="shaded"
      />
      <Article>
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
        <ContentWrapper>
          <Content className="container">
            <ReactMarkdown source={props.data.content} />
          </Content>
        </ContentWrapper>
      </Article>
      <ChapterNav prev={props.prev} next={props.next} />
    </Wrapper>
  );
};

export default withTheme(Post);
