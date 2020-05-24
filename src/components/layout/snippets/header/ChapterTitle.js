import React from 'react'
import styled, { withTheme } from 'styled-components'


const ChapterTitleContainer = styled.div`
    color: ${ (props) => props.theme.colors.text}
    opacity: ${(props) => props.theme.colors.textOpacity};
    margin-left: 70px;
    margin-right: 70px;

    @media (max-width: ${props => props.theme.pageWidth.xl}px) {
        max-width: ${(props) => props.theme.articleMaxWidth}px;
        margin: 3em auto;
        width: 100vw;
        padding: 0 30px;
    }

    // @media screen and (max-width: 1221px) {
    //     margin: 15px auto;
    // }    
`;

const Title = styled.h1`
    text-align: left;
    line-height: 1.25;
    font-family: ${props => props.theme.fonts.display};
    font-size: ${props => props.titleSize ? `${props.titleSize / 16}em` : "2em"};
    z-index 10;
`

const Author = styled.p`
    font-size: 2em;
    margin: 0.5em 0 2em;

    @media (max-width: ${props => props.theme.pageWidth.xl}px) {
        margin-bottom: 0.5em;
    }


    // @media screen and (max-width: 1221px) {
    //     font-size: 1.8rem;
    //     margin: 0.5em 0 1.5em;
    // }    
`
const Date = styled.p`

`
const chapterTitle = (props) => {

    const authorClass = String(props.author).toLowerCase()
                                            .replace('á', 'a')
                                            .replace('é', 'e')
                                            .replace('í', 'i')
                                            .replace('ó', 'o')
                                            .replace('ú', 'u')
                                            .replace(/[^a-z0-9 -]/g, "")
                                            .replace(/\s+/g, "-")
                                            .replace(/-+/g, "-")
                                            .replace(/^-+/, "")
                                            .replace(/-+$/, "")

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