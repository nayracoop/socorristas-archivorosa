import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import Flock from '../movieclips/Flock'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left:0;
  top:0;
`

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
      <Birds width={600} height={600} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} />
    </Wrapper>
  );
}

export default LaBuenaNoticia;