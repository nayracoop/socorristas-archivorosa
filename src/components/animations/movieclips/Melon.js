import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import { withSwinging } from '../hoc/motion'

const MelonImage = styled(AlphaMatteImg)`
  transform-origin: left bottom;
`

const Melon = (props) => {
  return (
    <MelonImage {...props} />
  );
}

export default withSwinging(Melon)