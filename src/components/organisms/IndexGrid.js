import React, { Component } from 'react'
import styled from 'styled-components'
import IndexItem from '../molecules/IndexItem'
import texts from '../../assets/texts/texts.json'


const IndexGridContainer = styled.div`
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color:black;
`;

const indexGrid = (props) =>{
    return(
        <IndexGridContainer>
            {texts.headers.map(text=>{
                return <IndexItem titleContent={text.title} authorContent={text.author}></IndexItem>
            })}
        </IndexGridContainer>
    );
}


export default indexGrid