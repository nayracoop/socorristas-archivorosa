import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Wrapper = styled.div`
  width: 231px;
  max-width: 100%;
  position: relative;
  ::before {
    content: "";
    display: block;
    padding-top: 52.81%;
  }
`

const Body = styled(AlphaMatteImg)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 90.47%;
  height: auto;
`;

const Head = styled(AlphaMatteImg)`
  display: block;
  position: absolute;
  left: 0;
  top: 4.91%;
  width: 26.40%;
  height: auto; 
  transform-origin: 70% 60%;
  transform: ${props => props.transform};
  transition: transform 100ms ease-out;
`;

const AnimateBird = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 60% 95%;
  transform: ${props => props.transform};
  transition: transform 200ms ease-out;
`

const Bird = (props) => {

  const [ transform, setTransform ] = useState({ body:'none', head:'none' })
  const headTransforms = [ 'rotate(-10deg) skew(0deg, 5deg)', 'rotate(15deg) skew(-10deg, 0deg)', 'none' ]
  const bodyTransforms = [ 'skew(-1deg, 0deg)', 'skew(2deg, 0deg)', 'none' ]
  let timer = null

  const move = () => {
    const ih = Math.round(Math.random()*(headTransforms.length-1))
    const ib = Math.round(Math.random()*(bodyTransforms.length-1))
    if(headTransforms[ih] == transform.head) move()
    else {
      setTransform({ body:bodyTransforms[ib], head:headTransforms[ih] })
    }
  }

  useEffect(() => {    
    timer = setTimeout(move, 600 + Math.random()*2000)
    return () => { 
      clearTimeout(timer)
    }
  })

  return (
    <Wrapper className={props.className}>
      <AnimateBird transform={transform.body}>
        <Body src={require('../../../assets/imgs/del-socorro-del-socorro/bird_body.jpg')} />
        <Head transform={transform.head} src={require('../../../assets/imgs/del-socorro-del-socorro/bird_head.jpg')} />
      </AnimateBird>
    </Wrapper>
  );
}

export default Bird