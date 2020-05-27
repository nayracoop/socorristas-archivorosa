import React from "react";
import styled, { withTheme } from "styled-components";
import IndexItem from "../snippets/body/index/IndexItem";

const IndexGridContainer = styled.div`
  margin: 0 auto;
  width:100%;
  overflow:hidden;
  height: auto;
  `;

const GridContainer = styled.div`
  margin: 0 auto;
  width:100%;
  height: auto;
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


const IntroductionContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding-top:20%;

  p{
    margin-top: 30px;
    font-family: ${(props) => props.theme.fonts.display};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.4em;
    opacity: ${(props) => props.theme.colors.textOpacity};

    a {
      display: inline-block;
      font-weight: 600;
      color: ${(props) => props.theme.colors.text}
      opacity: ${(props) => props.theme.colors.textOpacity * 2};
      background: linear-gradient(to right , rgba(189,140,191,.7), rgba(189,140,191,.4));
      background-repeat: no-repeat;
      transition: all ease-in-out .5s;
      background-position: -700px;   

        &:hover{
          text-decoration:none;
          color: ${(props) => props.theme.colors.text};
          opacity: ${(props) => props.theme.colors.textOpacity * 2};
          background-position: 0px;
      }
  }

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
      p{
        font-size: 1.5em;
      }
      
  }
 }

`;

const IndexItemContainer = styled.div`
  position: relative;
  grid-area: ${(props) => props.area}
`;

const indexGrid = (props) => {
  return (
    <IndexGridContainer>
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

      <GridContainer>
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
                collage={post.meta.slug}
                borderColor={post.theme.index.borderColor}
                imageAlign={post.theme.index.imageAlign}
                quoteVerticalAlign={post.theme.index.quoteVerticalAlign}
                quoteHorizontalAlign={post.theme.index.quoteHorizontalAlign}
                background={post.theme.index.background}
                quoteHighlight={post.theme.index.quoteHighlight}
              ></IndexItem>
            </IndexItemContainer>
          );
        })}
      </GridContainer>

    </IndexGridContainer>
  );
};

export default withTheme(indexGrid);
