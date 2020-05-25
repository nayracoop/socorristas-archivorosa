import React from 'react';
import styled from 'styled-components'
import Butterfly from '../movieclips/Butterfly'


const Wrapper = styled.div`
  width:100%;
  height:100%;
  position: absolute;
`

const StyledButterfly = styled(Butterfly)`
    position: absolute;
    top: -3%;
    right: -5%;
    width: 58.25%;
    height: auto;
`;

const Bike = styled.img`
    position: absolute;
    left: -5%;
    bottom: 0;
    width: 96.09%;
    height: auto;
`;

const Number = styled.img`
    display: block;
    position: absolute;
    bottom: 100px;
    left: -10%;    
    width: 13.66%;
    height: auto;
`;

const HayAbortos = (props) => {
    return (
        <Wrapper className={props.className}>
            <StyledButterfly />
            <Bike src={require('../../../assets/imgs/hay-abortos/bike.png')} alt="" />
            <Number src={require('../../../assets/imgs/hay-abortos/number.png')} alt="10" />
        </Wrapper>
    );
}

export default HayAbortos