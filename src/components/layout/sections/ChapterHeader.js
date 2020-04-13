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
    opacity:0.7;
`;


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
            </ChapterHeaderContainer>
        </div>
    );
}

export default ChapterHeader