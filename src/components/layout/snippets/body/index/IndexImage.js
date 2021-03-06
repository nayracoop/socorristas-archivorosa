import React from 'react'
import styled from 'styled-components'
import HayAbortos from "../../../../animations/index/HayAbortos"
import VientoEnVenecia from "../../../../animations/index/VientoEnVenecia"
import ElPalpitarDeLosAbortos from "../../../../animations/index/ElPalpitarDeLosAbortos"
import ElAbortoComoLugarParaConmoverme from "../../../../animations/index/ElAbortoComoLugarParaConmoverme"
import Lina from "../../../../animations/index/Lina"
import QuieroQueSalga from "../../../../animations/index/QuieroQueSalga"
import LaBuenaNoticia from "../../../../animations/index/LaBuenaNoticia"
import LaBuenaNoticiaFlock from "../../../../animations/index/LaBuenaNoticiaFlock"
import Nilda from "../../../../animations/index/Nilda"
import DelSocorroDelSocorro from "../../../../animations/index/DelSocorroDelSocorro"
import CuandoEstamosJuntas from "../../../../animations/index/CuandoEstamosJuntas"
import UrgenciaRosa from "../../../../animations/index/UrgenciaRosa"

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
            return <LaBuenaNoticia></LaBuenaNoticia>;
        case 'viento-en-venecia':
            return <VientoEnVenecia></VientoEnVenecia>;
        case 'hay-abortos':
            return <HayAbortos></HayAbortos>;
        case 'el-aborto-como-lugar-para-conmover-me':
            return <ElAbortoComoLugarParaConmoverme></ElAbortoComoLugarParaConmoverme>;
        case 'la-buena-noticia-':
            return <LaBuenaNoticiaFlock></LaBuenaNoticiaFlock>;
        case 'lina':
            return <Lina ></Lina>;
        case 'quiero-que-salga':
            return <QuieroQueSalga></QuieroQueSalga>;
        case 'nilda':
            return <Nilda></Nilda>
        case 'del-socorro-del-socorro':
            return <DelSocorroDelSocorro></DelSocorroDelSocorro>;
        case 'urgencia-rosa':
            return <UrgenciaRosa></UrgenciaRosa>;
        case 'cuando-estamos-juntas':
            return <CuandoEstamosJuntas></CuandoEstamosJuntas>
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