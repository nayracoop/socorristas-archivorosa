import React from 'react'
import styled from 'styled-components'

const TitleTag = styled.h1`  
    font-family:${props => props.font};
    font-size:${props => props.size + "em" || "1em"};
    color:${props => props.color};
`;


const title = (props) => {
    return (
        <TitleTag size={props.titleSize} font={props.titleFont} color={props.titleColor}>{props.titleText}</TitleTag>
    );
}

export default title