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

const ImageItem = styled.div`
    grid-row: 1 / 4;
    grid-column: 1 / 6;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    animation: floating 3s ease-in-out alternate infinite;
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
                <ImageItem>
                    <Image width="545" height="1080" src={props.image} />
                    {/* <ChapterHeaderImage image={props.image}></ChapterHeaderImage> */}
                </ImageItem>
            </ChapterHeaderContainer>
        </div>
    );
}

export default ChapterHeader