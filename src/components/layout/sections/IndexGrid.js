import React from "react";
import styled from "styled-components";
import IndexItem from "../snippets/body/index/IndexItem";

const IndexGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh 50vh 50vh 50vh 100vh 100vh;
`;

const IndexItemContainer = styled.div`
  position: relative;
  overflow: visible;
  grid-row: ${(props) => props.gridrs} / ${(props) => props.gridre};
  grid-column: ${(props) => props.gridcs} / ${(props) => props.gridce};
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
            gridrs={post.theme.grid.row.start}
            gridre={post.theme.grid.row.end}
            gridcs={post.theme.grid.column.start}
            gridce={post.theme.grid.column.end}
          >
            <IndexItem
              content={post.excerpt}
              href={"/" + post.meta.slug}
              image={image}
              borderColor={post.theme.borderColor}
              imageAlign={post.theme.imageAlign}
              textvalign={post.theme.textvalign}
              texthalign={post.theme.texthalign}
              background={post.theme.background}
            ></IndexItem>
          </IndexItemContainer>
        );
      })}
    </IndexGridContainer>
  );
};

export default indexGrid;
