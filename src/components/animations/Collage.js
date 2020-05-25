import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: ${props => props.width}px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: ${props => props.height/props.width}%;
  }
`

const Number = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 10.41%;
  height: auto;
  left: 49.52%;
  top: 18.32%;
  transition: transform 800ms ease-out;
`;

const Plant = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 30.12%;
  height: auto;
  top: 0;
  left: 31.23%;
  transition: transform 800ms ease-out;
`;

const Shadow = styled(AlphaMatteImg)`
  position: absolute;
  bottom: 0;
  width: 96.37%;
  height: auto;
  top: 25.68%;
  right: 0;
  transition: transform 800ms ease-out;
`;


const Collage = (props) => {


  
  return (
    <Wrapper className={props.className}>
      <Shadow style={{transform: `translate3d(0,${scrollY[4]}px,0)`}} src={require ('../../assets/imgs/nilda/shadow.jpg')} />
      <Plant style={{transform: `translate3d(0,${scrollY[4]}px,0)`}} src={require ('../../assets/imgs/nilda/plantpot.jpg')} />
      <Number style={{transform: `translate3d(0,${scrollY[4]}px,0)`}} src={require ('../../assets/imgs/nilda/number.jpg')} />
    </Wrapper>
  );
}

export default Collage;