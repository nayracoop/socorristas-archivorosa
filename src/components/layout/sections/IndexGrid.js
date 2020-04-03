import React from 'react'
import styled from 'styled-components'
import IndexItem from '../snippets/body/index/IndexItem'
import texts from '../../../assets/texts/textsHeaders.json'


const IndexGridContainer = styled.div`

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