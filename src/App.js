import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import ChapterHeader from './components/layout/templates/ChapterHeader';
import IndexGrid from './components/layout/templates/IndexGrid';

const background = require('./assets/imgs/img01.jpg');
const theme = { };

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
            Hola :D
          </Route>
        </ThemeProvider>
      </div>
      );
  }
}

export default withRouter(App);
