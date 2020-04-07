import React from 'react'
import styled, { ThemeContext } from 'styled-components'
import IndexItem from '../snippets/body/index/IndexItem'
import textsInfo from '../../../assets/texts/indexItemsContent.json'


const IndexGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh 100vh 100vh 50vh 50vh 50vh 100vh 100vh;
`;

const indexGrid = (props) =>{
    return(
        <IndexGridContainer>
            {textsInfo.headers.map((textInfo, i)=>{
                const image = require ('../../../assets/imgs/' + textInfo.img + '.png')
                return <IndexItem 
                            key={i}

                            gridrs={textInfo.gridrs} 
                            gridre={textInfo.gridre}
                            gridcs={textInfo.gridcs} 
                            gridce={textInfo.gridce}
                            align={textInfo.align} 

                            content={textInfo.quote} 
                            image={image}>
                        </IndexItem>
            })}
        </IndexGridContainer>
    );
}


export default indexGrid