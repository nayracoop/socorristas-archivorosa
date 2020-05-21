import React from "react";
import styled, { withTheme } from "styled-components";

const FooterContainer = styled.footer`
  max-width: ${(props) => props.theme.maxWidth}px;
  height: 100vh;
  margin: 0 auto;
  padding: 15% 2em;
  text-align: center;
`;

const FooterBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  bottom: 0;
  opacity: ${(props) => props.theme.colors.backgroundOpacity};
  background-color: ${(props) => props.theme.colors.background};
  z-index: -1;
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
    <div>
      <FooterContainer>
        <FooterText>
          <p>
            Archivo Rosa es un experimento narrativo que busca compartir
            historias y reflexiones de activistas que forman parte de{" "}
            <a target="blank" href="http://socorristasenred.org/">
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
            <a href="/"> Victoria Gagliardi y Tomás Bergero</a>
          </p>
          <p>
            Collages:{" "}
            <a target="blank" href="https://www.instagram.com/mulata.dcv/">
              María Reboredo (@mulata.cv)
            </a>
          </p>
          <p>
            {" "}
            Diseño y programación:<a target="blank" href="https://nayra.coop/"> nayra.coop </a>
          </p>
          <p>
            {" "}
            Producción audiovisual:
            <a target="blank" href="/"> Rodrigo Bonilla </a>
          </p>
        </FooterText>
      </FooterContainer>
      <FooterBackground></FooterBackground>
    </div>
  );
};

export default withTheme(Footer);
