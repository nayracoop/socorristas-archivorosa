import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import IndexGrid from './components/layout/sections/IndexGrid';

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
};

class App extends Component {

  render() {
    return (
      <div className="app">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <IndexGrid ></IndexGrid>
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
