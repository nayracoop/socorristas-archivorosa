import React from 'react'
import styled from 'styled-components'

const DateTag = styled.h1`  
    font-family:${props => props.dateFont};
    font-size:${props => props.dateSize + "em" || "1em"};
    color:${props => props.dateColor};
     padding-top:${props => props.dateSize + "em" || "1em"}
`;


const date = (props) => {
    return (
        <DateTag dateSize={props.size} dateFont={props.font} dateColor={props.color}>{props.content}</DateTag>
    );
}

export default date