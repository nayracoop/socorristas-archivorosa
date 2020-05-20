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
  opacity: 0.3;
  background-color: #bd8cbf;
  z-index: -1;
`;

const FooterText = styled.p`
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
  display: inline;
`;

const Footer = (props) => {
  console.log(props.theme);
  return (
    <div>
      <FooterContainer>
        <FooterText>
          Archivo Rosa es lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla consectetur erat eget ex eleifend, nec maximus ante
          posuere. Nullam in pretium arcu. Sed porta faucibus leo in egestas.
          Vivamus non massa auctor, congue libero at, lacinia sem. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
          Nulla sit amet quam ultricies, laoreet eros id, tristique massa.
          Mauris faucibus quam turpis, non efficitur arcu placerat in. Donec
          luctus fermentum consequat. Praesent pulvinar viverra viverra. Nam
          auctor ac mauris quis venenatis. Nulla tincidunt ultrices dui, id
          dapibus felis pellentesque id. Nullam tristique dolor sit amet dui
          luctus, vitae pharetra ipsum ultricies. Donec vestibulum sem nibh, sed
          feugiat est accumsan et.
        </FooterText>
        <FooterText>
          <ul>
            {props.content.map((post, i) => {
              console.log(props.theme.colors.text);
              return (
                <FooterLink key={i}>
                  <a href={"/" + post.meta.slug}>{post.title} . </a>
                </FooterLink>
              );
            })}
          </ul>
        </FooterText>
        <FooterText className="credits">
          Collages:
          <a href="https://www.instagram.com/mulata.dcv/">
            María Reboredo (@mulata.cv)
          </a>
          <br></br>
          Curaduría y gestión:
          <a href="#"> Tomas Bergero y Victoria Gagliardi</a>
          <br></br>
          Diseño y programación: <a href="https://nayra.coop/"> nayra.coop </a>
        </FooterText>
      </FooterContainer>
      <FooterBackground></FooterBackground>
    </div>
  );
};

export default withTheme(Footer);
