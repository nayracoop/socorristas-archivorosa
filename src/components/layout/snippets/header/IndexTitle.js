import React from 'react'
import styled, { withTheme } from 'styled-components'


const IndexTitleContainer = styled.div`
    color: ${ (props) => props.theme.colors.text}
    opacity: ${(props) => props.theme.colors.textOpacity};
    margin-left: 0;
    margin-right: 70px;

    @media (max-width: ${props => props.theme.pageWidth.xl}px) {
        max-width: ${(props) => props.theme.articleMaxWidth}px;
        margin: 3em auto 0;
        width: 100vw;
        padding: 0 30px;
    }
    @media (max-width: ${props => props.theme.pageWidth.s}px) {
        margin-top: 10vh;
    }

    // @media screen and (max-width: 1221px) {
    //     margin: 15px auto;
    // }    
`;

const Title = styled.h1`
    text-align: left;
    line-height: 1.25;
    font-family: ${props => props.theme.fonts.display};
    z-index 10;
    @media (min-width: ${props => props.theme.pageWidth.xl}px) {
        font-size: ${props => props.titleSize ? `${props.titleSize / 16}em` : "2em"};
        span {
            padding-left: 35px;
        }
    }
    @media (max-width: ${props => props.theme.pageWidth.xl}px) {
        font-size: ${props => props.titleSize ? `${props.titleSize / 32}em` : "2em"};
    }

    @media (max-width: ${props => props.theme.pageWidth.s}px) {
        font-size: ${props => props.titleSize ? `${props.titleSize / 40}em` : "2em"};
    }
`
const Line1 = styled.span`
    display: block;
`

const Line2 = styled.span`
    background: ${props => props.theme.colors.background};
`

const IndexTitle = (props) => {
    return (
        <IndexTitleContainer>
            <Title titleSize={props.titleSize}>
                <Line1>{props.titleLine1}</Line1>
                <Line2>{props.titleLine2}</Line2>
            </Title>
        </IndexTitleContainer>
    );
}

export default withTheme(IndexTitle)