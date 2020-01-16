import React, { Component } from 'react'
import styled from 'styled-components'
import IndexItem from '../molecules/IndexItem'
import texts from '../../assets/texts/texts.json'


const IndexGridContainer = styled.div`
    height: 100%;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-color:black;

    @media (min-width: 900px){
       grid-template-columns: 1fr 1fr;
       grid-template-rows: auto;
    }

    @media (min-width: 1200px){
       grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1600px){
       grid-template-columns: 1fr 1fr 1fr 1fr;
    }
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