import React from 'react'
import styled from 'styled-components'

import ChapterTitle from '../snippets/header/ChapterTitle'
import ChapterHeaderImage from '../snippets/header/ChapterHeaderImage'

const ChapterHeaderContainer = styled.div`
    position: relative;
    height:100vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

const HeaderBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width:${props=> props.backgroundWidth ? props.backgroundWidth : "50%"};
    height:100%;
    opacity:0.7;
    background-color: pink;
    background-size
`

const ChapterHeader = (props) =>{
    return(
        <div>
            <ChapterHeaderContainer>
                <ChapterTitle 
                    titleContent={props.titleContent} 
                    authorContent={props.authorContent} 
                    dateContent={props.dateContent} 
                    titleSize={props.titleSize}>
                </ChapterTitle>
                <ChapterHeaderImage image={props.image}></ChapterHeaderImage>
                <HeaderBackground ></HeaderBackground>
            </ChapterHeaderContainer>
        </div>
    );
}

export default ChapterHeader