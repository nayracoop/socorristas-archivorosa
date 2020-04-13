import React from 'react'
import styled from 'styled-components'


const IndexImageContainer = styled.div`
    position: absolute;
    left:-15%;
    top:-15%;
    height:130%;
    width:130%;
    z-index: 9999;
`;

const BackgroundContainer = styled.div`
    width:100%;
    height:100%;
    background-image:url(${props=> props.image});
    background-size:auto 100%;
    background-repeat: no-repeat;
`;



const indexImage = (props) => {
    return(
        <IndexImageContainer >
            <BackgroundContainer image={props.image}></BackgroundContainer>
         </IndexImageContainer>
    );
}


export default indexImage