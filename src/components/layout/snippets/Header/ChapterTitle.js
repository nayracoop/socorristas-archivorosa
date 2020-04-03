import React from 'react'
import styled from 'styled-components'


const ChapterTitleContainer = styled.div`
    grid-row-start:2;
    padding-top:5%;
`;


const Author = styled.h2`

`
const Title = styled.h3`

`
const Date = styled.p`

`

const chapterTitle = (props) => {
    return(
        <ChapterTitleContainer>
            <Title>{props.titleContent}  </Title>
            <Author>{props.authorContent}</Author>
            <Date>{props.dateContent}</Date>
        </ChapterTitleContainer>
    );
}

export default chapterTitle