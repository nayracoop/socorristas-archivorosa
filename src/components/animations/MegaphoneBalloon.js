import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { withFloat } from './hoc/motion'

const Image = styled(AlphaMatteImg)`
    width:100%;
    max-height: 870px;
    width: auto;
    position: absolute;
    right: 5px;
`;

const MegaphoneBalloon = (props) => {
  return (
    <Image className={props.className} src={require ('../../assets/imgs/el-aborto-como-lugar-para-conmover-me.jpg')} />
  );
}

export default withFloat(MegaphoneBalloon);