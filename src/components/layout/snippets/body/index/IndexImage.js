import React from 'react'
import styled from 'styled-components'


const IndexImageContainer = styled.div`
    position: absolute;
    left:-10;
    top:-10%;
    height:120%;
    width:120%;
    z-index: 9999;
`;

const Image = styled.img`
    position:absolute;
    left:${props=>props.align === "left" ? "-1%" :"" };
    right:${props=>props.align === "right" ? "-1%" :"" };
    height:100%;
    animation: floating 4s ease-in-out alternate infinite;
`;


const indexImage = (props) => {
    return(
        <IndexImageContainer >
            <Image align={props.align} src={props.image} ></Image>
         </IndexImageContainer>
    );
}


export default indexImage