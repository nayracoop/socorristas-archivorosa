import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'
import ButterflyBike from '../../../animations/ButterflyBike';
import MegaphoneBalloon from '../../../animations/MegaphoneBalloon';
import CloudsBench from '../../../animations/CloudsBench';
import HeartChat from '../../../animations/HeartChat';
import BassinetBranch from '../../../animations/BassinetBranch';
import BirdChair from '../../../animations/BirdChair';

const Image = styled.img`
    // margin-top:1%;
    // height: 95%;
    // position: absolute;
    // right: 5px;
`;

const ChapterHeaderImage = (props) => {
    return (
        <Switch>
            <Route path="/la-buena-noticia">
                <Image src={props.image} />
            </Route>
            <Route path="/viento-en-venecia" exact>
                <BassinetBranch />
            </Route>
            <Route path="/hay-abortos" exact>
                <ButterflyBike />
            </Route>
            <Route path="/el-aborto-como-lugar-para-conmover-me" exact>
                <MegaphoneBalloon />
            </Route>
            <Route path="/lina" exact>
                <CloudsBench />
            </Route>
            <Route path="/quiero-que-salga">
                <Image src={props.image} />
            </Route>
            <Route path="/nilda">
                <Image src={props.image} />
            </Route>
            <Route path="/del-socorro-del-socorro" exact>
                <BirdChair />
            </Route>
            <Route path="/urgencia-rosa" exact>
                <BirdChair />
            </Route>
            <Route path="/cuando-estamos-juntas">
                <Image src={props.image} />
            </Route>
            <Route path="/el-palpitar-de-los-abortos" exact>
                <HeartChat />
            </Route>
            <Route path="/">
                <Image src={props.image} />
            </Route>
        </Switch>
    );
}

export default withTheme(ChapterHeaderImage)