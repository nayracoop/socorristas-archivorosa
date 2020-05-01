import React from 'react'
import styled from 'styled-components'


const IndexImageContainer = styled.div`
    position: absolute;
    height:120%;
    width:120%;
    top:-10%;
    left:-10%;
    z-index: 9999;
`;

const Image = styled.img`
    position:absolute;
    height:100%;
    left:${props => props.align === "left" ? "-1%" : "0"};
    right:${props => props.align === "right" ? "-1%" : "0"};
`;


const indexImage = (props) => {
    return (
        <IndexImageContainer >
            <Image align={props.align} src={props.image} ></Image>
        </IndexImageContainer>
    );
}


export default indexImage