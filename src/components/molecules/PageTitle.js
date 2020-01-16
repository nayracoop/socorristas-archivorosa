import React from 'react'
import styled from 'styled-components'


// Create a Title component that'll render an <h1> tag with some styles
const TitleWrapped = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const DateWrapped = styled.p`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

const AuthorWrapped = styled.h2`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;


const pageTitle = (props) => {
    return(
        <div>
            <DateWrapped>{props.dateText}</DateWrapped>
            <TitleWrapped>{props.titleText}</TitleWrapped>
            <AuthorWrapped>{props.authorText}</AuthorWrapped>
        </div>
    );
}

export default pageTitle