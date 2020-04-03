import React from 'react'
import styled from 'styled-components'

const ParagraphTag = styled.p`  
    font-family:${props => props.titleFont};
    font-size:${props => props.titleSize + "em" || "1em"};
    color:${props => props.titleColor};
`;

const HighlightedText = styled.span`
    font-family:${props => props.titleFont};
    font-size:${props => props.titleSize + "em" || "1em"};
    color:${props => props.highlightedColor};
    font-weight: 800;
`;

const

const Paragraph = (props) => {
    return (
        <ParagraphTag 
            titleSize={props.size} 
            titleFont={props.font} 
            titleColor={props.color}>
            {props.contentBefore}
            <HighlightedText
                titleColor={props.highglightedColor}>
                {props.highlightedContent}
            </HighlightedText>
            {props.contentAfter}
        </ParagraphTag>
    );
}

export default paragraph