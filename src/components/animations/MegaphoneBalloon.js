import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { withFloat } from './hoc/motion'

const Image = styled(AlphaMatteImg)`
    max-width: 437px;
    width: 100%;
    height: auto;
`;

const MegaphoneBalloon = (props) => {
  return (
    <Image className={props.className} src={require ('../../assets/imgs/el-aborto-como-lugar-para-conmover-me/balloon.jpg')} />
  );
}

export default withFloat(MegaphoneBalloon);