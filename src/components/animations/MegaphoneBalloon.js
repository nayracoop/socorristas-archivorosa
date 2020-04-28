import React from 'react';
import styled, { withTheme } from 'styled-components'
import Float from './movieclips/Float'
import AlphaMatteImg from './graphics/AlphaMatteImg'

const Image = styled(AlphaMatteImg)`
    width:100%;
    max-height: 870px;
    width: auto;
    position: absolute;
    right: 5px;
`;

const MegaphoneBalloon = (props) => {
  return (
    <Float>
      <Image src={require ('../../assets/imgs/el-aborto-como-lugar-para-conmover-me.jpg')} />
    </Float>
  );
}

export default withTheme(MegaphoneBalloon);