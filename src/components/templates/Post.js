import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.article`
  max-width: ${props => props.theme.articleMaxWidth}px;
  margin: 0 64px;
  font-size: 1.3125em;

  p {
    margin-top: 1.5em;
  }
`

const Post = (props) => {

  return (
    <div>
      <Wrapper>
        Hola :D
        <Content>
          <ReactMarkdown source={props.content}/>
        </Content>
      </Wrapper>
    </div>
  );
}

export default withTheme(Post);