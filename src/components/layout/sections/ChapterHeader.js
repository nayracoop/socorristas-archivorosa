import React from 'react'
import styled from 'styled-components'

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
    left: ${props => props.backgroundAlign === 'right' ? 'auto' : 0};
    right: ${props => props.backgroundAlign === 'right' ? 0 : 'auto'};
    top: 0;
    bottom: 0;
    width: ${props => props.backgroundWidth ? props.backgroundWidth : "50%"};
    opacity:0.7;
    background-color: pink;
    z-index: -1;
`

const ChapterHeader = (props) =>{
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
                <HeaderBackground />
            </Image>
        </ChapterHeaderContainer>
    );
}

export default ChapterHeader