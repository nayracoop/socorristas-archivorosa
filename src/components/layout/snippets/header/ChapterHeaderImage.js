import React from 'react'
import styled, { withTheme } from 'styled-components'

const Image = styled.img`
    margin-top:1%;
    height: 95%;
    position: absolute;
    right: 5px;
    animation: floating 4s ease-in-out alternate infinite;
`;

const ChapterHeaderImage = (props) => {
    console.log(props.theme)
    return (
        <Image src={props.image} />
    );
}

export default withTheme(ChapterHeaderImage)