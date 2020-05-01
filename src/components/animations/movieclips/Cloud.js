import React from 'react';
import { withFloat } from '../hoc/motion'

const Cloud = (props) => {
  return (
    <img {...props} />
  );
}

export default withFloat(Cloud, { offset: '4px', duration: '4s' })