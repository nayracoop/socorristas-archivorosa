import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Flock from '../movieclips/Flock'
import Cloud from '../movieclips/Cloud'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left:0;
  top:0;
`

const BigCloud = styled(Cloud)`
  position: absolute;
  top:-18%;
  width: 150%;
  height: 50%;
  left: 0%;
  animation-delay: -1.25s;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    top: 68%;
    left: -20%;
  }
`;


const Birds = styled(Flock)`
  width: 100%;
  position: absolute;
  bottom: 80%;
  left: -10%;
`

const LaBuenaNoticia = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper>
      <BigCloud src={require('../../../assets/imgs/lina/cloud.jpg')} />
      <Birds width={600} height={600} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} />
    </Wrapper>
  );
}

export default LaBuenaNoticia;