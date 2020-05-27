import React from "react";
import styled, { withTheme } from "styled-components";
import IndexGrid from "../layout/sections/IndexGrid";
import IndexHeader from "../layout/sections/IndexHeader";

const image = require("../../assets/imgs/index-header.png");

const HomeContainer = styled.div`
  margin: 0 auto;
`;

const home = (props) => {
  return (
    <HomeContainer>
      <IndexHeader
        theme={{
          ...props.theme,
          content: { size: "50%", margin: 0 },
          background: { size: "50%" },
        }}
        titleLine1="Archivo"
        titleLine2="Rosa."
        titleSize="144"
        image={image}
      ></IndexHeader>
      <IndexGrid content={props.content}></IndexGrid>
    </HomeContainer>
  );
};

export default withTheme(home);
