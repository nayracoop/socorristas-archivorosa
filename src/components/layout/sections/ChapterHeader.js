import React from 'react'
import styled, { withTheme } from 'styled-components'

import ChapterTitle from '../snippets/header/ChapterTitle'
import ChapterHeaderImage from '../snippets/header/ChapterHeaderImage'

const ChapterHeaderContainer = styled.header`
    position: relative;
    height: 680px;
    // display:grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
    display: flex;
    flex-flow: row wrap;
    margin: 1em 0;
`

const Text = styled.div`
    flex: 1;
    align-self: center;
`

const Image = styled.div`
    flex: 1;
    height: 100%;
`

const HeaderBackground = styled.div`
    position: absolute;
    left: ${props => props.theme.align === 'right' ? 'auto' : 0};
    right: ${props => props.theme.align === 'right' ? 0 : 'auto'};
    top: 0;
    bottom: 0;
    width: ${props => props.theme.size ? props.theme.size : "50%"};
    opacity:0.3;
    background-color: #bd8cbf;
    z-index: -1;
`

const ChapterHeader = (props) =>{
    console.log(props.theme)
    return(
        <ChapterHeaderContainer>
                <Text>
                <ChapterTitle 
                    title={props.title} 
                    author={props.author}
                    info={props.info} 
                    date={props.date} 
                    titleSize={props.titleSize}>
                </ChapterTitle>
            </Text>
            <Image>
                <ChapterHeaderImage image={props.image}></ChapterHeaderImage>
                <HeaderBackground theme={props.theme.background} />
            </Image>
        </ChapterHeaderContainer>
    );
}

export default withTheme(ChapterHeader)