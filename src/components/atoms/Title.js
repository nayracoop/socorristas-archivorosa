import React from 'react'
import styled from 'styled-components'

const TitleTag = styled.h1`  
    font-family:${props => props.titleFont};
    font-size:${props => props.titleSize + "em" || "1em"};
    color:${props => props.titleColor};
`;


const title = (props) => {
    return (
        <TitleTag titleSize={props.size} titleFont={props.font} titleColor={props.color}>{props.content}</TitleTag>
    );
}

export default title