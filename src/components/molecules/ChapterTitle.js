import React from 'react'
import styled from 'styled-components'

import Title from '../atoms/Title'
import Author from '../atoms/Author'
import Date from '../atoms/Date'

const ChapterTitleContainer = styled.div`
    grid-row-start:2;
    padding-top:5%;
`;

const chapterTitle = (props) => {
    return(
        <ChapterTitleContainer>
            <Title size="2.2" font="serif" color="white" content={props.titleContent} > </Title>
            <Author size="1" font="sans-serif" color="Lavender" content={props.authorContent}></Author>
            <Date size="1" font="sans-serif" color="Lavender" content={props.dateContent}></Date>
        </ChapterTitleContainer>
    );
}

export default chapterTitle