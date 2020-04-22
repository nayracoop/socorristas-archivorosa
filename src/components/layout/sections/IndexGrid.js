import React from 'react'
import styled from 'styled-components'
import IndexItem from '../snippets/body/index/IndexItem'



const IndexGridContainer = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: ${props=> props.columns} ;
    grid-template-rows: 100vh 100vh 100vh 50vh 50vh 50vh 100vh 100vh;
`;

const IndexItemContainer = styled.div`
    position: relative;
    overflow: visible
    grid-row: ${props=> props.gridrs} / ${props=> props.gridre};
    grid-column: ${props=> props.gridcs} / ${props=> props.gridce};
    background-color:${props=> props.background};
`

const indexGrid = (props) =>{
    return(
        <IndexGridContainer>
            {props.content.map((text, i)=>{
                const image = require ('../../../assets/imgs/' + text.img + '.png')
                return(
                    <IndexItemContainer
                        gridrs={text.gridrs} 
                        gridre={text.gridre} 
                        gridcs={text.gridcs} 
                        gridce={text.gridce}
                        background={text.background}>
                        <IndexItem 
                            key={i} 
                            content={text.quote} 
                            image={image}
                            borderColor={text.borderColor}
                            imageAlign={text.imageAlign}
                            textValign={text.textValign}
                            textHalign={text.textHalign}>
                        </IndexItem>
                    </IndexItemContainer>
                )
            })}
        </IndexGridContainer>
    );
}


export default indexGrid