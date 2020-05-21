import React from 'react'
import styled from 'styled-components'
import IndexGrid from '../layout/sections/IndexGrid'
import ChapterHeader from '../layout/sections/ChapterHeader'

const image = require('../../assets/imgs/index-header.png')

const HomeContainer = styled.div`
    margin: 0 auto;
`;

const IntroductionContainer = styled.div`
    height:100vh;
    width:70%;
    margin: 0 auto;
    padding-top: 15%;
    font-family: ${props => props.theme.fonts.display};
    font-size: 2em;
    opacity: .7;
`;

const home = (props) => {
    return (
        <HomeContainer>
            <ChapterHeader theme={{ ...props.theme, content: { align: 'left', margin: 0 }, background: { size: '50%', align: 'right' } }}
                title="Archivo rosa"
                titleSize="192"
                image={image}
                scrollText="Scrolleá hacia abajo para conocer los relatos">
            </ChapterHeader>
            <IntroductionContainer>
                <p>
                    Une pide ayuda, otre escucha, alguien pasa el dato y todes acompañan. El relato que estás a punto de leer es un entramado de experiencias de activistes feministas de la Colectiva Feminista La Revuelta que dan forma a un sueño colectivo: construir lazos de sororidad en tiempos urgentes.
                </p>
                <p>
                    Al hacer clic en cada fragmento podrás acceder a distintos testimonios que componen un cadáver exquisito hecho al calor de la lucha por el aborto libre y feminista.

                </p>
            </IntroductionContainer>
            <IndexGrid content={props.content}></IndexGrid>
        </HomeContainer>
    );
}

export default home