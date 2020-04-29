import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withFlutter } from '../hoc/motion'

const ButterflyWing = (props) => {
  return (
    <AlphaMatteImg {...props} />
  );
}

export default withFlutter(ButterflyWing)
export const ButterflyLeftWing = withFlutter(ButterflyWing, { y: 1 })
export const ButterflyRightWing = withFlutter(ButterflyWing, { y: -1 })