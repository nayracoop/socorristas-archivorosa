import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Post from './components/templates/Post';

import texts from './assets/texts/indexItemsContent.json'
import Home from './components/templates/Home';

const background = require('./assets/imgs/background.jpg');

const theme = { 
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: 'indigo'
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
  maxWidth: 1366,
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
            <Home></Home>
          </Route>
          <Route path='/post'>
            <Post data={texts.headers[0]}></Post>
          </Route>
        </ThemeProvider>
      </Container>
      );
  }
}

export default withRouter(App);
