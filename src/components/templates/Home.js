import React from "react";
import styled, { withTheme } from "styled-components";
import IndexGrid from "../layout/sections/IndexGrid";
import ChapterHeader from "../layout/sections/ChapterHeader";

const image = require("../../assets/imgs/index-header.png");

const HomeContainer = styled.div`
  margin: 0 auto;
`;

const home = (props) => {
  return (
    <HomeContainer>
      <ChapterHeader
        theme={{
          ...props.theme,
          content: { size: "50%", align: "left", margin: 0 },
          background: { size: "50%", align: "right" },
        }}
        title="Archivo rosa"
        titleSize="192"
        image={image}
      ></ChapterHeader>
      <IndexGrid content={props.content}></IndexGrid>
    </HomeContainer>
  );
};

export default withTheme(home);
