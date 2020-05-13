import React from 'react'
import styled from 'styled-components'


const ChapterTitleContainer = styled.div`
    // grid-row: 2 / 3;
    // grid-column: 4 / 6;
    color: ${props => props.theme.colors.dark}
    // z-index: 10;
    margin-left: 70px;
`;

const Title = styled.h1`
    text-align: left;
    line-height:${props => props.titleSize ? props.titleSize-props.titleSize/2.5 + "px" : 32/2.5};
    font-family: ${props => props.theme.fonts.display };
    font-size: ${props => props.titleSize ? `${props.titleSize/16}em` : "2em"};
    z-index 10;
    opacity: 0.7;
`

const Author = styled.h2`
    font-size: 2em;
    margin: 0.5em 0 2em;
`
const Date = styled.p`

`

const chapterTitle = (props) => {

    const authorClass = String(props.author).toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");

    return(
        <ChapterTitleContainer>
            <Title titleSize={props.titleSize}>{props.title}</Title>
            <Author className={authorClass}>{props.author}</Author>
            <Date>{props.info}</Date>
            <Date>{props.date}</Date>
        </ChapterTitleContainer>
    );
}

export default chapterTitle