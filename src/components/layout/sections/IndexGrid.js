import React from "react";
import styled, { withTheme } from "styled-components";
import IndexItem from "../snippets/body/index/IndexItem";

const IndexGridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 100vh 100vh 100vh 100vh 100vh 100vh 100vh 100vh 100vh 100vh 100vh;
  grid-template-areas:
  "first"
  "second"
  "third"
  "fourth"
  "fifth"
  "sixth"
  "seventh"
  "eighth"
  "ninth"
  "tenth"
  "eleventh"
  "twelfth";

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh 100vh 100vh 50vh 50vh 50vh 100vh 100vh;
    grid-template-areas:
    "first first"
    "second third"
    "fourth fifth"
    "sixth sixth"
    "seventh seventh"
    "eighth eighth"
    "ninth tenth"
    "eleventh twelfth";
  }
`;

const IndexItemContainer = styled.div`
  position: relative;
  grid-area: ${(props) => props.area}
`;

const indexGrid = (props) => {
  return (
    <IndexGridContainer>
      {props.content.map((post, i) => {
        const image = require("../../../assets/imgs/index-" +
          post.meta.slug +
          ".png");

        return (
          <IndexItemContainer
            key={i}
            area={post.theme.index.grid}
          >
            <IndexItem
              content={post.excerpt}
              href={"/" + post.meta.slug}
              image={image}
              borderColor={post.theme.index.borderColor}
              imageAlign={post.theme.index.imageAlign}
              textvalign={post.theme.index.textvalign}
              texthalign={post.theme.index.texthalign}
              background={post.theme.index.background}
              quoteHighlight={post.theme.index.quoteHighlight}
            ></IndexItem>
          </IndexItemContainer>
        );
      })}
    </IndexGridContainer>
  );
};

export default withTheme(indexGrid);
