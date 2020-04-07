import React from 'react'
import styled from 'styled-components'
import IndexImage from './IndexImage'



const IndexItemContainer = styled.div`
    position: relative;
    overflow: visible
    grid-row: ${props=> props.gridrs} / ${props=> props.gridre};
    grid-column: ${props=> props.gridcs} / ${props=> props.gridce};
    padding:10%;
    &:hover {
    background-color: MediumSeaGreen ;
    cursor:pointer;
    opacity:1;
    text-align: ${props => props.align}

    background-image: url(${props=> props.image});  
  }
`

const Quote = styled.h1`
  font-family: ${props => props.theme.fonts.display};
  font-size: 32px;
  width: 50%;
  z-index 10;
`
const indexItem = (props) => {
    return(
        <IndexItemContainer gridrs={props.gridrs} gridre={props.gridre} gridcs={props.gridcs} gridce={props.gridce} align={props.align}>
            <Quote>{props.content}</Quote>
            <IndexImage image={props.image}></IndexImage>
        </IndexItemContainer>
    );
}


export default indexItem