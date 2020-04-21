import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { withTheme } from 'styled-components';
import ChapterHeader from '../layout/sections/ChapterHeader'
const image = require ('../../assets/imgs/el-aborto-como-lugar-para-conmover-me.png')

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`

const Content = styled.article`
  max-width: ${props => props.theme.articleMaxWidth}px;
  margin: 0 64px;
  font-size: 1.3125em;
  align-self: center;

  p {
    margin-top: 1.5em;
  }
`

const Post = (props) => {

  return (
    // <div>    
    //   <ChapterHeader 
    //     titleContent={props.titleContent} 
    //     authorContent={props.authorContent} 
    //     dateContent={props.dateContent} 
    //     titleSize={props.titleSize}        
    //     image={image}>
    //   </ChapterHeader>
      
    // </div>
    <Wrapper>
      <ChapterHeader 
        titleContent={props.titleContent} 
        authorContent={props.authorContent} 
        dateContent={props.dateContent} 
        titleSize={props.titleSize}        
        image={image}>
      </ChapterHeader>
      <Content>
        <ReactMarkdown source={props.content}/>
      </Content>
    </Wrapper>
  );
}

export default withTheme(Post);