import React from 'react'
import styled from 'styled-components'

const AuthorTag = styled.h1`  
    font-family:${props => props.authorFont};
    font-size:${props => props.authorSize + "em" || "1em"};
    color:${props => props.authorColor};
    padding-top:${props => props.authorSize/3 + "em" || "1em"}
`;


const author = (props) => {
    return (
        <AuthorTag authorSize={props.size} authorFont={props.font} authorColor={props.color}>{props.content}</AuthorTag>
    );
}

export default author