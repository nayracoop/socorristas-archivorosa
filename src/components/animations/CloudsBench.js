import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from './graphics/AlphaMatteImg'
import { withFloat } from './hoc/motion'

const Image = styled(AlphaMatteImg)`
    max-width: 437px;
    width: 100%;
    height: auto;
`;

const CloudsBench = (props) => {
  return (
    <div>
      <Image className={props.className} src={require ('../../assets/imgs/lina/cloud.jpg')} />
      <Image className={props.className} src={require ('../../assets/imgs/lina/bench.jpg')} />
      <Image className={props.className} src={require ('../../assets/imgs/lina/train.jpg')} />
    </div>
  );
}

export default withFloat(CloudsBench);