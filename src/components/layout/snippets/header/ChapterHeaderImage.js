import React, { useState, useEffect }  from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components'
import { useParallax } from '../../../animations/hooks/parallax'
import ButterflyBike from '../../../animations/ButterflyBike';
import MegaphoneBalloon from '../../../animations/MegaphoneBalloon';
import CloudsBench from '../../../animations/CloudsBench';
import HeartChat from '../../../animations/HeartChat';
import BassinetBranch from '../../../animations/BassinetBranch';
import BirdChair from '../../../animations/BirdChair';
import MelonChat from '../../../animations/MelonChat';

const Image = styled.img`
    // margin-top:1%;
    // height: 95%;
    // position: absolute;
    // right: 5px;
    max-width: 100%;
`;

const Wrapper = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // width: 100%;
    // height: 100%;

    // transform: translate3d(0,${props => props.theme.top}px,0);
    // transition: trnasform 1ms ease-in-out;
`

const ChapterHeaderImage = (props) => {

    // const scrollY = useParallax();

    return (
        <Wrapper className={props.className}>
            <Switch>
                <Route path="/la-buena-noticia" exact>
                    <Image src={require('../../../../assets/imgs/la-buena-noticia/completo.png')} />
                </Route>
                <Route path="/viento-en-venecia" exact>
                    <BassinetBranch />
                </Route>
                <Route path="/hay-abortos" exact>
                    <ButterflyBike className="chapter-header-image"/>
                </Route>
                <Route path="/el-aborto-como-lugar-para-conmover-me" exact>
                    <MegaphoneBalloon className="chapter-header-image"/>
                </Route>
                <Route path="/lina" exact>
                    <CloudsBench className="chapter-header-image"/>
                </Route>
                <Route path="/quiero-que-salga" exact>
                    <MelonChat src={props.image} />
                </Route>
                <Route path="/nilda" exact>
                    <Image src={require('../../../../assets/imgs/nilda/completo.png')} />
                </Route>
                <Route path="/del-socorro-del-socorro" exact>
                    <BirdChair className="chapter-header-image"/>
                </Route>
                <Route path="/urgencia-rosa" exact>
                    <Image src={require('../../../../assets/imgs/urgencia-rosa/completo.png')} />
                </Route>
                <Route path="/cuando-estamos-juntas" exact>
                    <Image src={require('../../../../assets/imgs/cuando-estamos-juntas/completo.png')} />
                </Route>
                <Route path="/el-palpitar-de-los-abortos" exact>
                    <HeartChat />
                </Route>
                <Route path="/" exact>
                    <Image src={props.image} className="chapter-header-image"/>
                </Route>
            </Switch>
        </Wrapper>
    );
}

export default withTheme(ChapterHeaderImage)