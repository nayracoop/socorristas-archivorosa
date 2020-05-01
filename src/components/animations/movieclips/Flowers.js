import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withWind } from '../hoc/motion'

const Flower = styled(AlphaMatteImg)`
  transform-origin: center bottom;
`

const Flowers = (props) => {
  return (
    <Flower {...props} />
  );
}

export default withWind(Flowers)