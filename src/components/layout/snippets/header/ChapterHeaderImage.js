import React from 'react'
import styled from 'styled-components'

const HeaderImageContainer = styled.div`
   
`;

const HeaderImage = styled.div`
    // position: absolute;
    // left: 0;
    // top: 5%;
    // width:60%;
    z-index: 1000;
    background-repeat: no-repeat;
    background-size: auto 90%;
`

const Image = styled.img`
    width:100%;
    animation: floating 4s ease-in-out alternate infinite;
`;

const ChapterHeaderImage = (props) =>{
    return(
        <HeaderImageContainer> 
            <HeaderImage>
                <Image src={props.image} />
            </HeaderImage>
        </HeaderImageContainer>
    );
}

export default ChapterHeaderImage