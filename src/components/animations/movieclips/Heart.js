import React from 'react';
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withBeat } from '../hoc/motion'

const Heart = (props) => {
  return (
    <AlphaMatteImg {...props} />
  );
}

export default withBeat(Heart)