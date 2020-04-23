import React from 'react'
import styled, { withTheme } from 'styled-components'

const Image = styled.img`
    width:100%;
    max-height: 870px;
    width: auto;
    position: absolute;
    right: 5px;
    animation: floating 4s ease-in-out alternate infinite;
`;

const ChapterHeaderImage = (props) =>{
    console.log(props.theme)
    return(
        <div>
            <Image src={props.image} />
        </div>
    );
}

export default withTheme(ChapterHeaderImage)