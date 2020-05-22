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
            <Route path="/hay-abortos" exact>
                <ButterflyBike className="chapter-header-image"/>
            </Route>
            <Route path="/el-aborto-como-lugar-para-conmover-me" exact>
                <MegaphoneBalloon className="chapter-header-image"/>
            </Route>
            <Route path="/lina" exact>
                <CloudsBench />
            </Route>
            <Route path="/el-palpitar-de-los-abortos" exact>
                <HeartChat className="chapter-header-image"/>
            </Route>
            <Route path="/viento-en-venecia" exact>
                <BassinetBranch className="chapter-header-image"/>
            </Route>
            <Route path="/del-socorro-del-socorro" exact>
                <BirdChair className="chapter-header-image"/>
            </Route>
            <Route path="/">
                <Image src={props.image} className="chapter-header-image"/>
            </Route>
        </Switch>
    );
}

export default withTheme(ChapterHeaderImage)