import React from 'react'
import styled from 'styled-components'

import ChapterTitle from '../snippets/header/ChapterTitle'

import texts from '../../../assets/texts/textsHeaders.json'


const ChapterHeaderContainer = styled.div`
    height:100vh;
    text-align: center;
    padding:2%;
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    background-color:black;
    opacity:0.7;

    &:hover {
        cursor:pointer;
        opacity:.5;
    }
`;

const BackgroundContainer = styled.div`
    width:100%;
    height:100vh;
    margin-top:-100vh;
    background-image:url(${props=> props.backgroundImg});
    background-size:cover;
    z-index:-1;
`;

const ChapterHeader = (props) =>{
    return(
        <div>
            <ChapterHeaderContainer>
                <ChapterTitle titleContent= {texts.headers[0].title} authorContent={texts.headers[0].author} dateContent={texts.headers[0].date} ></ChapterTitle>
            </ChapterHeaderContainer>
            <BackgroundContainer backgroundImg={props.backgroundImage}></BackgroundContainer>
        </div>
    );
}

export default ChapterHeader