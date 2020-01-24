import React, { Component } from 'react'
import ChapterHeader from '../components/organisms/ChapterHeader'
import IndexGrid from '../components/organisms/IndexGrid'

const background = require('../assets/imgs/img01.jpg')

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
