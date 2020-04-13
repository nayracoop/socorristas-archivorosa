import React from 'react'
import styled from 'styled-components'


const ChapterTitleContainer = styled.div`
    grid-row: 2 / 3;
    grid-column: 4 / 6;
    color: ${props => props.theme.colors.dark}
    z-index: 10;
`;

const Title = styled.h1`
    text-align: left;
    line-height:${props => props.titleSize ? props.titleSize-props.titleSize/2.5 + "px" : 32/2.5};
    font-family: ${props => props.theme.fonts.display};
    font-size: ${props => props.titleSize ? props.titleSize + "px" : "32px"};
    z-index 10;    
`

const Author = styled.h2`

`
const Date = styled.p`

`

const chapterTitle = (props) => {
    return(
        <ChapterTitleContainer>
            <Title titleSize={props.titleSize}>{props.titleContent}</Title>
            <Author>{props.authorContent} </Author>
            <Date>{props.dateContent} </Date>
        </ChapterTitleContainer>
    );
}

export default chapterTitle