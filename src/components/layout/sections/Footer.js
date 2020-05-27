import React from "react";
import styled, { withTheme } from "styled-components";

const FooterContainer = styled.footer`
  // max-width: ${(props) => props.theme.maxWidth}px;
  // min-height: 100vh;
  margin: 0 auto;
  padding: 6em 30px;
  text-align: center;
  // opacity: ${(props) => props.theme.colors.backgroundOpacity};
  background-color: ${(props) => props.theme.colors.background + parseInt(props.theme.colors.backgroundOpacity*255).toString(16)};
`;

const FooterText = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 1em;
  margin-bottom: 50px;

  a {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }

  &.credits {
    border-top: 1px solid ${(props) => props.theme.colors.text};
    padding-top: 50px;
    max-width: 450px;
    margin: 0 auto;
  }
`;

const FooterLink = styled.li`
  display: block;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
        <FooterText>
          <p>
            Archivo Rosa es un experimento narrativo que busca compartir
            historias y reflexiones de activistas que forman parte de{" "}
            <a target="_blank" href="http://socorristasenred.org/">
              Socorristas en Red (feministas que abortamos).
            </a>
          </p>
        </FooterText>
        <FooterText>
          <ul>
            {props.content.map((post, i) => {
              return (
                <FooterLink key={i}>
                  <a href={"/" + post.meta.slug}>{post.title} . </a>
                </FooterLink>
              );
            })}
          </ul>
        </FooterText>
        <FooterText className="credits">
          <p>
            Dirección y producción:{" "}
            <a target="_blank" href="http://victoriagagliardi.com.ar/">Victoria Gagliardi</a> y <a target="_blank" href="https://tomasbergero.com/">Tomás Bergero</a>
          </p>
          <p>Collages: <a target="_blank" href="https://www.instagram.com/mulata.dcv/">María Reboredo (@mulata.cv)</a></p>
          <p>Diseño y programación: <a target="_blank" href="https://nayra.coop/">Romina Gómez, Ignacio Guerra y Tobías Irigoyen (nayra.coop)</a></p>
          <p>Producción audiovisual: <a target="_blank" href="https://www.instagram.com/mandinga_motion">Rodrigo Bonilla</a></p>
        </FooterText>
      </FooterContainer>
  );
};

export default withTheme(Footer);
