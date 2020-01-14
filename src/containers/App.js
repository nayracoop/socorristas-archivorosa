import React, { Component } from 'react';
import Title from '../components/atoms/Title';
import Author from '../components/atoms/Author';
import Text from '../assets/texts/01.json'

class App extends Component {

  render() {
    return (
      <div>
        <Title titleColor="red" titleSize="2" titleText={Text.title}></Title>
        <Author authorColor="black" authorSize="1" authorText={"By " + Text.author}></Author>
      </div>
      );
  }
}

export default App;
