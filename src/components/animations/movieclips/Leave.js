import React from 'react';
import styled from 'styled-components'
import { withSpin, withRails, withBlastOff, withFloatingWrap, withZoom } from '../hoc/motion'

const Wrapper = styled.div`
  position: absolute;
`

const Leave = (props) => {
  return (
    <Wrapper className={props.className}>
      {props.children}
    </Wrapper>
  );
}

export default withBlastOff(withRails(withFloatingWrap(withZoom(withSpin(Leave)))))
export const LeaveAlt = withBlastOff(withRails(withFloatingWrap(withZoom(withSpin(Leave, { direction: -1 })))))