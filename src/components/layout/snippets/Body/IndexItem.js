import React from 'react'
import styled from 'styled-components'


const IndexItemContainer = styled.div`
    margin:10px;
    padding:10px;
    min-height:200px;
    min-width:400px;
    border: 1px solid white;
    opacity:.7;
    background-color: ${props=> props.background || ""};

    &:hover {
    background-color: MediumSeaGreen ;
    cursor:pointer;
    opacity:1;
  }
`

const Author = styled.h2`

`
const Title = styled.h3`

`

const indexItem = (props) => {
    return(
        <IndexItemContainer >
            <Title size="2.2" font="serif" color="white" >{props.titleContent}</Title>
            <Author size="1" font="sans-serif" color="Lavender">{props.authorContent}</Author>
        </IndexItemContainer>
    );
}


export default indexItem