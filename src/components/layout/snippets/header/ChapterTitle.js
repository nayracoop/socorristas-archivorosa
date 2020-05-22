import React from 'react'
import styled, { withTheme } from 'styled-components'


const ChapterTitleContainer = styled.div`
    color: ${ (props) => props.theme.colors.text}
     opacity: ${(props) => props.theme.colors.textOpacity};
    margin-left: 70px;
    @media screen and (max-width: 1221px) {
        margin: 15px auto;
    }    
`;

const Title = styled.h1`
    text-align: left;
    line-height:${props => props.titleSize ? props.titleSize - props.titleSize / 2.5 + "px" : 32 / 2.5};
    font-family: ${props => props.theme.fonts.display};
    font-size: ${props => props.titleSize ? `${props.titleSize / 16}em` : "2em"};
    z-index 10;
`

const Author = styled.h2`
    font-size: 2em;
    margin: 0.5em 0 2em;
    @media screen and (max-width: 1221px) {
        font-size: 1.8rem;
        margin: 0.5em 0 1.5em;
    }    
`
const Date = styled.p`

`
const chapterTitle = (props) => {

    const authorClass = String(props.author).toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");

    return (
        <ChapterTitleContainer>
            <Title titleSize={props.titleSize}>{props.title}</Title>
            <Author className={authorClass}>{props.author}</Author>
            <Date>{props.info}</Date>
            <Date>{props.date}</Date>
        </ChapterTitleContainer>
    );
}

export default withTheme(chapterTitle)