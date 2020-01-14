import React from 'react'
import styled from 'styled-components'

const ParagraphText = styled.p`  
    width:50%;
    font-size: 1em;
    text-align: left;
    color: #000;
    float: ${props => props.alignment || "none"};
`;

const StrongParagraph = styled.span`  
    font-weight: 800;
`;

const sideParagraph = (props) => {
    return(
            <ParagraphText alignment={props.textAlignment}>{props.text}<StrongParagraph>{props.strongText}</StrongParagraph></ParagraphText>
    );
}

export default sideParagraph