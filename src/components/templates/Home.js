import React from 'react'
import styled from 'styled-components'
import IndexGrid from '../layout/sections/IndexGrid'
import ChapterHeader from '../layout/sections/ChapterHeader'
const image = require ('../../assets/imgs/00_Header.png')

const HomeContainer = styled.div`

`;

const home = (props) =>{
    return(
        <HomeContainer>
            <ChapterHeader titleSize="184" titleContent="Archivo rosa" image={image}></ChapterHeader>
            <IndexGrid></IndexGrid>
        </HomeContainer>
    );
}


export default home