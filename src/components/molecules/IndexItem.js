import React, { Component } from 'react'
import styled from 'styled-components'

import Title from '../atoms/Title'
import Author from '../atoms/Author'

const IndexItemContainer = styled.div`
    margin:20px;
    padding:10px;
    background-color: yellow;
    min-height:200px;
    min-width:300px;
`;

const indexItem = (props) => {
    return(
        <IndexItemContainer>
            <Title size="2em" font="sans-serif" color="purple" content={props.titleContent}></Title>
            <Author size="1em" font="sans-serif" color="gray" content={props.authorContent}></Author>
        </IndexItemContainer>
    );
}

export default indexItem