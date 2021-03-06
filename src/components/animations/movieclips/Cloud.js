import React from 'react';
import { withFloat } from '../hoc/motion'
import AlphaMatteImg from '../graphics/AlphaMatteImg'

const Cloud = (props) => {
  return (
    <AlphaMatteImg {...props} />
  );
}

export default withFloat(Cloud, { offset: '4px', duration: '4s' })