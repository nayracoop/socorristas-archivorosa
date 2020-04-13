import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import ChapterHeader from './components/layout/sections/ChapterHeader';
import IndexGrid from './components/layout/sections/IndexGrid';
import Text from './components/templates/Text';

import texts from './assets/texts/textsHeaders.json'

const background = require('./assets/imgs/background.png');
const theme = { 
  colors: {
    dark: '#04090d',
    light: '#f8f8f8',
    primary: 'indigo'
  },
  fonts: {
    display: "'Work Sans', 'sans-serif'",
    text: "'Open Sans', 'sans-serif'"
  },
  pageWidth: {
    xl: 1200,
    l: 992,
    m: 768,
    s: 576
  },
  articleMaxWidth: 680,
};

class App extends Component {

  render() {
    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <IndexGrid></IndexGrid>
            <ChapterHeader backgroundImage={background}></ChapterHeader>
          </Route>
          <Route path="/post">
            <Text content={texts.headers[0].text} />
          </Route>
        </ThemeProvider>
      </div>
      );
  }
}

export default withRouter(App);
