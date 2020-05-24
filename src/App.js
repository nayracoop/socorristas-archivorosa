import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Post from "./components/templates/Post";
import AnimationMockup from "./components/animations/Mockup";

import content from "./assets/texts/posts.json";
import Home from "./components/templates/Home";
import Footer from "./components/layout/sections/Footer";

const theme = {
  colors: {
    text: "#04090d",
    textOpacity: "0.7",
    background: "#bd8cbf",
    backgroundOpacity: "0.3",
  },
  fonts: {
    display: "'Roboto Slab', serif",
  },
  pageWidth: {
    xxl: 1366,
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
  },
  maxWidth: 1366,
  articleMaxWidth: 680,
};

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <Home content={content.posts}></Home>
          </Route>
          <Switch>
            {content.posts.map((post, index) => {
              const headerImage = require(`./assets/imgs/header-${post.meta.slug}.png`)
              const previousPost = index === 0 ? content.posts.length : index
              const nextPost = index === content.posts.length - 1 ? 1 : index + 2
              return (
                <Route key={post.meta.slug} path={"/" + post.meta.slug}>
                  <Post data={post} 
                    headerImage={headerImage} 
                    prev={ { index: previousPost, link: content.posts[previousPost-1].meta.slug } }
                    next={ { index: nextPost, link: content.posts[nextPost-1].meta.slug } }></Post>
                </Route>
              );
            })}
          </Switch>
          <Footer content={content.posts}></Footer>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(App);
