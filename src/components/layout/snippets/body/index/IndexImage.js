import React from 'react'
import styled from 'styled-components'


const IndexImageContainer = styled.div`
    position: absolute;
    left:-10%;
    top:-10%;
    height:120%;
    width:120%;
`;

const BackgroundContainer = styled.div`
    width:100%;
    height:100%;
    background-image:url(${props=> props.image});
    background-size:auto 100%;
    background-repeat: no-repeat;
    z-index: -1;
`;



const indexImage = (props) => {
    return(
        <IndexImageContainer >
            <BackgroundContainer image={props.image}></BackgroundContainer>
         </IndexImageContainer>
    );
}


export default indexImage