import React from "react";
import styled, { withTheme } from "styled-components";
import IndexGrid from "../layout/sections/IndexGrid";
import ChapterHeader from "../layout/sections/ChapterHeader";

const image = require("../../assets/imgs/index-header.png");

const HomeContainer = styled.div`
  margin: 0 auto;
`;

const IntroductionContainer = styled.div`
  height: 100vh;
  width: 70%;
  margin: 0 auto;
  padding-top: 15%;
  font-family: ${(props) => props.theme.fonts.display};
  color: ${(props) => props.theme.colors.text};
  font-size: 2em;
  opacity: ${(props) => props.theme.colors.textOpacity};

  a {
    font-weight: 600;
    color: ${(props) => props.theme.colors.text}
    opacity: ${(props) => props.theme.colors.textOpacity * 2};
  }
`;

const home = (props) => {
  return (
    <HomeContainer>
      <ChapterHeader
        theme={{
          ...props.theme,
          content: { align: "left", margin: 0 },
          background: { size: "50%", align: "right" },
        }}
        title="Archivo rosa"
        titleSize="192"
        image={image}
      ></ChapterHeader>
      <IntroductionContainer>
        <p>
          Alguien pide ayuda, un oído escucha, pasa el dato y la Red acompaña.
        </p>
        <p>
          El relato que estás por leer es un entramado de experiencias de
          activistes feministas de{" "}
          <a target="blank" href="http://larevuelta.com.ar/">La Revuelta</a> que dan forma a un
          deseo colectivo: construir lazos de sororidad en tiempos urgentes.
        </p>

        <p>
          Al hacer clic en cada fragmento podrás acceder a distintos testimonios
          que componen un cadáver exquisito hecho al calor de la lucha por el
          aborto libre y feminista.
        </p>
      </IntroductionContainer>
      <IndexGrid content={props.content}></IndexGrid>
    </HomeContainer>
  );
};

export default withTheme(home);
