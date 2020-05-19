import React from 'react'
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import Leave, { LeaveAlt } from './Leave'

const LeaveDiv = styled.div`
  background: gray;
  width: 6px;
  height: 12px;
`

const DelayedLeave = styled(Leave)`
  animation-delay: ${props => props.theme.delay}s;
  height: 100%;
`

const DelayedLeaveAlt = styled(LeaveAlt)`
  animation-delay: ${props => props.theme.delay}s;
  height: 100%;
`

const Leaves = (props) => {
  const leaves = props.leaves.map((src, index) => {
    return index%2 ? <DelayedLeave key={index} theme={ { delay: index * -2.75 } } ><AlphaMatteImg src={src}/></DelayedLeave> : <DelayedLeaveAlt key={index} theme={ { delay: index * -1.25 } } ><AlphaMatteImg src={src}/></DelayedLeaveAlt>
  })

  return (
    <div className={props.className}>
      {/* <AlphaMatteImg {...props} /> */}
      {leaves}
    </div>
  );
}

export default Leaves