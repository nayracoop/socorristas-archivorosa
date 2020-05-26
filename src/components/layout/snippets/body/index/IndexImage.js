import React from 'react'
import styled from 'styled-components'
import HayAbortos from "../../../../animations/index/HayAbortos"
import VientoEnVenecia from "../../../../animations/index/VientoEnVenecia"
import ElPalpitarDeLosAbortos from "../../../../animations/index/ElPalpitarDeLosAbortos"
import ElAbortoComoLugarParaConmoverme from "../../../../animations/index/ElAbortoComoLugarParaConmoverme"
import Lina from "../../../../animations/index/Lina"
import QuieroQueSalga from "../../../../animations/index/QuieroQueSalga"

const IndexImageContainer = styled.div`
    position: absolute;
    height:105%;
    width:100%;
    top:-2.5%;
    z-index: 9999;
`;

const Image = styled.img`
    position:absolute;
    width:100%;
    bottom:-5%
`;

const Collage = (props) => {
    switch (props.collage) {
        case 'la-buena-noticia':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'viento-en-venecia':
            return <VientoEnVenecia></VientoEnVenecia>;
        case 'hay-abortos':
            return <HayAbortos></HayAbortos>;
        case 'el-aborto-como-lugar-para-conmover-me':
            return <ElAbortoComoLugarParaConmoverme></ElAbortoComoLugarParaConmoverme>;
        case 'la-buena-noticia-':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'lina':
            return <Lina ></Lina>;
        case 'quiero-que-salga':
            return <QuieroQueSalga></QuieroQueSalga>;
        case 'nilda':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'del-socorro-del-socorro':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'urgencia-rosa':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'cuando-estamos-juntas':
            return <Image align={props.align} src={props.image} ></Image>;
        case 'el-palpitar-de-los-abortos':
            return <ElPalpitarDeLosAbortos></ElPalpitarDeLosAbortos>;
        default:
            return null;
    }
}

const indexImage = (props) => {
    return (
        <IndexImageContainer >
            <Collage collage={props.collage} image={props.image}  ></Collage>
        </IndexImageContainer>
    );
}


export default indexImage