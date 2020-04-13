import React from 'react'
import styled from 'styled-components'

const HeaderImageContainer = styled.div`
    grid-row: 1 / 4;
    grid-column: 1 / 6;
    opacity:0.7;
`;

const HeaderBackground = styled.div`
    width:50%;
    height:100%;
    opacity:0.7;
    background-color: pink;
`


const ChapterHeaderImage = (props) =>{
    return(
        <HeaderImageContainer> 
            <HeaderBackground></HeaderBackground>
        </HeaderImageContainer>
    );
}

export default ChapterHeaderImage