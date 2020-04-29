import React from 'react'
import styled, { keyframes } from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import {ButterflyLeftWing, ButterflyRightWing } from './ButterflyWing'


const Wrapper = styled.div`
  max-width: 388px;
  position: relative;
  perspective: 500px;
  ::before {
    content: "";
    display: block;
    padding-top: 86.6%;
  }
`

const Body = styled(AlphaMatteImg)`
  position: absolute;
  left: 43.5%;
  top: 22%;
  width: 13.65%;
  height: auto;
`

const LeftWindg = styled(ButterflyLeftWing)`
  position: absolute;
  left: 0;
  top: 0;
  width: 49.22%;
  height: auto;
  transform-origin: right center;
`

const RightWindg = styled(ButterflyRightWing)`
  position: absolute;
  right: 0;
  top: 0;
  width: 47.42%;
  height: auto;
  transform-origin: left center;
`

const Butterfly = (props) =>{
  const { duration = '4s' } = props
  return (
    <Wrapper theme={ { duration } } className={props.className}>
      <Body src={require ('../../../assets/imgs/hay-abortos/butterfly-body.jpg')} />
      <LeftWindg src={require ('../../../assets/imgs/hay-abortos/butterfly-left-wing.jpg')} />
      <RightWindg src={require ('../../../assets/imgs/hay-abortos/butterfly-right-wing.jpg')} />
    </Wrapper>
  );
}

export default Butterfly