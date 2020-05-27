import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import content from "./assets/texts/posts.json";
import Home from "./components/templates/Home";
import Post from "./components/templates/Post";
import Footer from "./components/layout/sections/Footer";
import ScrollIndicator from "./components/layout/snippets/header/ScrollIndicator";

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

  getArrowDestiny(order) {
    const postId = order-1
    const slug = (content.posts[postId].meta.slug.endsWith('-')) ? content.posts[postId].meta.slug.slice(0, -1) : content.posts[postId].meta.slug
    const url = (order === 1) ? '' : slug
    return { index: order, link: url }
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
              if(index > 0) {
                const headerImage = require(`./assets/imgs/header-${post.meta.slug}.png`)
                const previousPost = index === 0 ? content.posts.length : index
                const nextPost = index === content.posts.length - 1 ? 1 : index + 2
                const urlSlug = (post.meta.slug.endsWith('-')) ? post.meta.slug.slice(0, -1) : post.meta.slug
                return (
                  <Route key={post.meta.slug} path={"/" + urlSlug}>
                    <Post data={post} 
                      headerImage={headerImage} 
                      prev={ this.getArrowDestiny(previousPost) }
                      next={ this.getArrowDestiny(nextPost) }></Post>
                  </Route>
                )
              }
            })}
          </Switch>
          <Footer content={content.posts}></Footer>
          <ScrollIndicator />
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(App);
