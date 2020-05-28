import React from 'react'
import styled from 'styled-components'
import { useParallax } from '../hooks/parallax'
import CollagePiece from '../graphics/CollagePiece'
import Collage from '../graphics/Collage'
import SingleFlower from '../movieclips/SingleFlower'
import Congress from '../movieclips/Congress'
import Flock from '../movieclips/Flock'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    width: 100%;
    height: 100%;
  //     position: absolute;
  //     bottom: -2%;
  //     left: -12%;
  //     width: 35.75%;
  //     height: auto;
  }    
`

const Flowers = styled.div`
  position: absolute;
  bottom: -100%;
  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
  }     
`
// const Congress = styled.div`
//   width: 70%;
//   left: -90%;
// `

const CongressWrapper = styled.div`
  position: absolute;
  top: -100%;
  right: 0;
  bottom: 0;
  left: 0;
  overflow:hidden;
  z-index: -1;
  pointer-events: none;
`

const StyledCongress = styled(Congress)`
  
  

  left: -80%;
  max-width: none;
  width: 200%;
  position: absolute;
  bottom: -5%;

  @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
    bottom: -15%;
    left: -40%;
    width: 100%;
  }  
`

const Building = styled(CollagePiece)`
  z-index: 3;
`
const Birds = styled(Flock)`

`
// const Dome = styled(CongressDome)`
//   position: absolute;
//   top: -60%;
// `

const LaBuenaNoticia = (props) => {

  const scrollY = useParallax([-0.2, -0.15, -0.1], -250, 250)

  return (
    <Wrapper className={props.className}>
      <Flowers width={600} height={400} x={0} y={0} style={{ transform: `translate3d(0,${scrollY[2]}px,0)` }}>
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/big_flower.jpg')} width={224} x={245} origin="85% bottom" />
        <SingleFlower src={require('../../../assets/imgs/la-buena-noticia/flower_right.jpg')} width={186} x={426} delay="-2.9s" />
      </Flowers>

      <CongressWrapper><StyledCongress width={779} height={423} birds={10} /></CongressWrapper>
      {/* <Congress>
        <Building src={require('../../../assets/imgs/la-buena-noticia/congress.jpg')} x={0} y={73} width={779} />
        <Dome src={require('../../../assets/imgs/la-buena-noticia/dome.jpg')} x={292} y={0} width={158} />
        <Birds width={420} height={350} x={398} y={-228} src={require('../../../assets/imgs/la-buena-noticia/birds.jpg')} />
      </Congress> */}
    </Wrapper>
  );
}

export default LaBuenaNoticia;