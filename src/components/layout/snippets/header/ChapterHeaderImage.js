import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'
import ButterflyBike from '../../../animations/ButterflyBike';
import MegaphoneBalloon from '../../../animations/MegaphoneBalloon';
import CloudsBench from '../../../animations/CloudsBench';

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
                <ButterflyBike />
            </Route>
            <Route path="/el-aborto-como-lugar-para-conmover-me" exact>
                <MegaphoneBalloon />
            </Route>
            <Route path="/lina" exact>
                <CloudsBench />
            </Route>
            <Route path="/">
                <Image src={props.image} />
            </Route>
        </Switch>
    );
}

export default withTheme(ChapterHeaderImage)