import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Post from './components/templates/Post';

import texts from './assets/texts/indexItemsContent.json'
import Home from './components/templates/Home';

const background = require('./assets/imgs/background.png');

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
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  },
  articleMaxWidth: 680,
};

const BackgroundContainer = styled.div`
  width:100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-image: url('${background}');
  background-size:33%;
  z-index: -1;
`

class App extends Component {

  render() {
    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path='/post'>
            <Post 
              titleContent={texts.headers[0].title}
              authorContent={texts.headers[0].author}
              dateContent={texts.headers[0].date}>
            </Post>
          </Route>
          <BackgroundContainer></BackgroundContainer>  
        </ThemeProvider>
      </div>
      );
  }
}

export default withRouter(App);
