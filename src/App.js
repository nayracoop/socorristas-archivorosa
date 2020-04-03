import React, { Component } from 'react'
import ChapterHeader from './components/layout/templates/ChapterHeader'
import IndexGrid from './components/layout/templates/IndexGrid'

const background = require('./assets/imgs/background.png')

class App extends Component {

  render() {
    return (
      <div className="app">
        <IndexGrid></IndexGrid>
        <ChapterHeader backgroundImage={background}></ChapterHeader>
      </div>
      );
  }
}

export default App;
