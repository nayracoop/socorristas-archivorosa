import React from 'react';
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withBeat2 } from '../hoc/motion'

const NoteBeat = (props) => {
  return (
    <AlphaMatteImg {...props} />
  );
}

export default withBeat2(NoteBeat)