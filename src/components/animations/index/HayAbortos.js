import React from 'react';
import styled from 'styled-components'
import Butterfly from '../movieclips/Butterfly'
import AlphaMatteImg from '../graphics/AlphaMatteImg'


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
    left: -75%;
    bottom: 0;
    width: 150%;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        width: 96.09%;
        left: -5%;
    }
`;

const Number = styled(AlphaMatteImg)`
    display: block;
    position: absolute;
    bottom: 100px;
    right: 18%;    
    width: 20%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        width: 13.66%;
        right: 4%;   
    }
`;

const HayAbortos = (props) => {
    return (
        <Wrapper className={props.className}>
            <StyledButterfly />
            <Bike src={require('../../../assets/imgs/hay-abortos/bike.png')} alt="" />
            <Number src={require('../../../assets/imgs/hay-abortos/number.jpg')} alt="10" />
        </Wrapper>
    );
}

export default HayAbortos