import React from 'react'
import styled from 'styled-components'
import IndexGrid from '../layout/sections/IndexGrid'
import ChapterHeader from '../layout/sections/ChapterHeader'
import content from '../../assets/texts/indexItems.json'

const image = require ('../../assets/imgs/00_Header.png')
const HomeContainer = styled.div`

`;

const home = (props) =>{
    return(
        <HomeContainer>
            <ChapterHeader theme={ {...props.theme, content: { align: 'left', margin: 0 }, background: { size: '50%', align: 'right' } } }
                title="Archivo rosa" 
                titleSize="192"
                image={image}>
            </ChapterHeader>
            <IndexGrid content={content}></IndexGrid>
        </HomeContainer>
    );
}


export default home