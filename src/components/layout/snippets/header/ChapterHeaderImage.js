import React from 'react'
import styled from 'styled-components'

const HeaderImageContainer = styled.div`
    position: relative;
    grid-row: 1 / 4;
    grid-column: 1 / 6;
`;

const HeaderBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width:${props=> props.backgroundWidth};
    height:100%;
    opacity:0.7;
    background-color: pink;
    background-size
`

const HeaderImage = styled.div`
    background-image:url(${props=> props.image});
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    z-index: 1000;
    background-repeat: no-repeat;
    background-size: auto 90%;;
`


const ChapterHeaderImage = (props) =>{
    return(
        <HeaderImageContainer> 
            <HeaderImage image={props.image} ></HeaderImage>
            <HeaderBackground ></HeaderBackground>
        </HeaderImageContainer>
    );
}

export default ChapterHeaderImage