import React, { useState, useEffect }  from 'react'
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

const Wrapper = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // width: 100%;
    // height: 100%;

    transform: translate3d(0,${props => props.theme.top}px,0);
    // transition: trnasform 1ms ease-in-out;
`

const ChapterHeaderImage = (props) => {

    const [scrollY, setScrollY] = useState(0)

    function onScroll() {
        const scrollPos = window.pageYOffset * -0.5
        setScrollY(scrollPos); 
    }   
    
    useEffect(() => {    
      // function watchScroll() {      
      // }    
      // watchScroll(); 
      window.addEventListener("scroll", onScroll); 
      
      return () => {      
        window.removeEventListener("scroll", onScroll); 
      }; 
    });

    return (
        <Wrapper theme={{ top: scrollY }} className={props.className}>
            <Switch>
                <Route path="/la-buena-noticia">
                    <Image src={props.image} className="chapter-header-image"/>
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
                <Route path="/quiero-que-salga">
                    <Image src={props.image} />
                </Route>
                <Route path="/nilda">
                    <Image src={props.image} />
                </Route>
                <Route path="/del-socorro-del-socorro" exact>
                    <BirdChair className="chapter-header-image"/>
                </Route>
                <Route path="/urgencia-rosa" exact>
                    <Image src={props.image} />
                </Route>
                <Route path="/cuando-estamos-juntas">
                    <Image src={props.image} />
                </Route>
                <Route path="/el-palpitar-de-los-abortos" exact>
                    <HeartChat />
                </Route>
                <Route path="/">
                    <Image src={props.image} className="chapter-header-image"/>
                </Route>
            </Switch>
        </Wrapper>
    );
}

export default withTheme(ChapterHeaderImage)