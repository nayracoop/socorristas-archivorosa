import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Post from './components/templates/Post';
import AnimationMockup from './components/animations/Mockup';

import content from './assets/texts/posts.json'
import Home from './components/templates/Home';

const background = require('./assets/imgs/background.jpg');

const theme = { 
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: '#bd8cbf' //'indigo',
  },
  fonts: {
    display: "'Roboto Slab', serif",
  },
  pageWidth: {
    xxl: 1366,
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  },
  articleMaxWidth: 680,
};

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: ${theme.maxWidth}px;
`

class App extends Component {

  render() {
    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/anim" exact>
            <AnimationMockup></AnimationMockup>
          </Route>
          <Switch>
          {content.posts.map(post => {
            return <Route key={post.meta.slug} path={'/' + post.meta.slug}>
              <Post data={post}></Post>
            </Route>
          })}
          </Switch>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(App);
