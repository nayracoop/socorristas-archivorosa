import React from 'react'
import styled from 'styled-components'


const IndexImageContainer = styled.div`
    position: absolute;
    height:105%;
    width:100%;
    top:-2.5%;
    z-index: 9999;
`;

const Image = styled.img`
    position:absolute;
    width:100%;
    bottom:-5%
`;


const indexImage = (props) => {
    return (
        <IndexImageContainer >
            <Image align={props.align} src={props.image} ></Image>
        </IndexImageContainer>
    );
}


export default indexImage