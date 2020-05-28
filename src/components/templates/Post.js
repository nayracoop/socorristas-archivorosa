import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled, { withTheme } from "styled-components";
import HomeBtn from "../layout/snippets/header/HomeBtn";
import ChapterHeader from "../layout/sections/ChapterHeader";
import ChapterNav from "../layout/snippets/nav/ChapterNav";
import { useScrollPosition } from "../animations/hooks/parallax";

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
      &.ready {
        background: linear-gradient(to right , rgba(189,140,191,.7), rgba(189,140,191,.4));
        background-repeat: no-repeat;
        // background-position: -1500px;
      }
      padding: 5px;
      transition: none;
      
      &:hover, &.active {
        background-position: 0 !important;
        text-decoration:none;
        // transition: background ease-out 1s;  
        transition-property: background;
        transition-timing-function: ease-out;
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

  const [ strongTexts, setStrongTexts ] = useState([])
  const scrollPosition = useScrollPosition()
  let text = useRef(null)

  useEffect(() => {
    if(strongTexts.length == 0) {
      let strongs = text.current ? text.current.querySelectorAll('strong') : []
      for(let i = 0; i < strongs.length; i++) {
        strongs[i].style.backgroundPosition = (-12 * strongs[i].textContent.length) + 'px'
        strongs[i].style.transitionDuration = (20 * strongs[i].textContent.length) + 'ms'
        strongs[i].classList.add('ready')
      }
      setStrongTexts(strongs)
    }

    for(let i = 0; i < strongTexts.length; i++) {
      if(!strongTexts[i].classList.contains('active')) {
        let rect = strongTexts[i].getBoundingClientRect()
        if(rect.top < window.innerHeight*0.75 && rect.bottom > window.innerHeight*0.25) {
          strongTexts[i].classList.add('active')
          // strongTexts[i].style.backgroundPosition = '0'
        } else if(rect.top > window.innerHeight) {
          break;
        }
        // else {
        //   strongTexts[i].classList.remove('active')
        // }
      }
    }
  }, [scrollPosition])

  return (
    <Wrapper>
      <HomeBtn
        href="/"
        btnText="Inicio"
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
          <Content ref={text} className="container">
            <ReactMarkdown source={props.data.content} />
          </Content>
        </ContentWrapper>
      </Article>
      <ChapterNav prev={props.prev} next={props.next} />
    </Wrapper>
  );
};

export default withTheme(Post);
