import React from 'react'
import styled from 'styled-components'

const authorTag = styled.h1`  
    font-family:${props => props.font};
    font-size:${props => props.size + "em" || "1em"};
    color:${props => props.color};
    padding-top:${props => props.size/3 + "em" || "1em"}
`;


const author = (props) => {
    return (
        <authorTag size={props.authorSize} font={props.authorFont} color={props.authorColor}>{props.authorText}</authorTag>
    );
}

export default author