import React from 'react';
import styled from 'styled-components'
import { useParallax } from './hooks/parallax'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { withFloat } from './hoc/motion'

const Wrapper = styled.div`
  transition: transform 800ms ease-out;
`;

const Image = styled(AlphaMatteImg)`
  max-width: 437px;
  width: 100%;
  height: auto;
`;

const MegaphoneBalloon = (props) => {

  const scrollY = useParallax(0.75, -800, 800)

  return (
    <Wrapper style={{ transform: `translate3d(0,${scrollY}px,0)`}}>
      <Image className={props.className} src={require ('../../assets/imgs/el-aborto-como-lugar-para-conmover-me/balloon.jpg')} />
    </Wrapper>
  );
}

export default withFloat(MegaphoneBalloon);