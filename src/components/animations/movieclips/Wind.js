import React from 'react'
import { withBeat2 } from '../hoc/motion'

const Wind = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default withWind(Wind)