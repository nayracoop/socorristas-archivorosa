import React from 'react';
import styled from 'styled-components'
import AlphaMatteImg from '../graphics/AlphaMatteImg'
import Flowers from '../movieclips/Flowers'
import Bird from '../movieclips/Bird'

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left:0;

`
const YellowFlowers = styled(Flowers)`
    position: absolute;
    bottom: 30%;
    left: 37.21%;
    width: 40.72%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        bottom: 25%;
        left: 37.21%;
        width: 40.72%;
        height: auto;
    }
`;

const TableShadow = styled(AlphaMatteImg)`
    position: absolute;
    bottom: 7%;
    left: 35%;
    width: 70%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        bottom: 5%;
        left: 30%;
        width: 54.3%;
        height: auto;
    }
    
`;

const Table = styled(AlphaMatteImg)`
    position: absolute;
    bottom:-1%;
    width: 97%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        bottom:-5%;;
        width: 79.87%;
        height: auto;
    }    
`;

const SmallFlower = styled(AlphaMatteImg)`
    position: absolute;
    top: 0%;
    right:12%;
    width: 30%;
    z-index: 999999; 
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        top: -5%;
        right:5%;
        width: 20%;
        z-index: 999999; 
        height: auto;
    }    
`;

const BigFlower = styled(AlphaMatteImg)`
    position: absolute;
    top: -2%;
    right: -20%;
    width: 60%;
    height: auto;
    z-index: 99999; 

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        top: -7%;
        right: -15%;
        width: 40%;
        height: auto;
        z-index: 99999; 
    }    
`;

const Smock = styled(AlphaMatteImg)`
    position: absolute;
    bottom: 5%;
    left: -12%;
    width: 40%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        bottom: -2%;
        left: -12%;
        width: 35.75%;
        height: auto;
    }    
`;

const Number = styled.img`
    position: absolute;
    left: 7%;
    bottom: 30%;
    width: 7%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        left: 7%;
        bottom: 27%;
        width: 4.24%;
        height: auto;
    }    
`;

const BigBird = styled(Bird)`
    position: absolute;
    right: -10%;
    top: -5%;
    width: 60%;
    height: auto;

    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        right: -25%;
        top: -10%;
        width: 45%;
        height: auto;
    }    
`;

const DelSocorroDelSocorro = (props) => {
    return (
        <Wrapper className={props.className}>
            <BigFlower src={require('../../../assets/imgs/del-socorro-del-socorro/flower.jpg')} />
            <SmallFlower src={require('../../../assets/imgs/del-socorro-del-socorro/flower.jpg')} />
            <YellowFlowers src={require('../../../assets/imgs/del-socorro-del-socorro/flowers.jpg')} />
            <TableShadow src={require('../../../assets/imgs/del-socorro-del-socorro/shadow.jpg')} />
            <Table src={require('../../../assets/imgs/del-socorro-del-socorro/table.jpg')} />
            <Smock src={require('../../../assets/imgs/del-socorro-del-socorro/smock.jpg')} />
            <Number src={require('../../../assets/imgs/del-socorro-del-socorro/number.png')} />
            <BigBird />
        </Wrapper>
    );
}

export default DelSocorroDelSocorro