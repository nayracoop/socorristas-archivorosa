import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withFloat } from '../hoc/motion'

const Image = styled(AlphaMatteImg)`
  position: absolute;  
  height: 90%;
  bottom: -5%;
  right:-20%;
`;

const ElAbortoComoLugarParaConmoverme = (props) => {
  return (
    <Image className={props.className} src={require('../../../assets/imgs/el-aborto-como-lugar-para-conmover-me/balloon.jpg')} />
  );
}

export default withFloat(ElAbortoComoLugarParaConmoverme);