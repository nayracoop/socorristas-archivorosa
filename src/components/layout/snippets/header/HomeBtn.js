import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useScrollDirection } from '../../../animations/hooks/parallax';
//import { ReactComponent as HomeBtnIcon } from '../../../../assets/imgs/back.svg';

const HomeBtnContainer = styled.div`
    position: fixed;
    left: 30px;
    top: 15px;
    z-index: 9999;
    transform-origin: -15px 15px;
    transform: rotate(-2deg);
    
    transition: all 400ms ease-in-out;
    ${props => props.visible === 'down' ? 'pointer-events: none; transform: translateY(-50px); transition-duration: 200ms;' : '' }

    &:hover, &:active {
        filter: brightness(.85);
    }

    @media (max-width: ${props => props.theme.pageWidth.s}px) {
        left: 5px;
    }
`;
const HomeBtnLink = styled(Link)`
    display: flex;
    &:hover {
        text-decoration: none;
    }
`;
const HomeBtnIcon = styled.img`
    height: 32px;
    filter: grayscale(.35);
    
`;

const HomeBtnCaption = styled.span`
    font-size: 1.125rem;
    color: #fff;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    margin-left: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
    @media screen and (max-width: 420px) {
        font-size: 1rem;
    }
`;

const HomeBtn = (props) => {  
    
    // const [ visibility, setVisibility ] = useState(false)
    const scrollDirection = useScrollDirection()

    // useEffect(() => {    
    //     console.log(visibility)
    //     if(scrollDirection === 'up') {
    //         if(!visibility) setVisibility(true)
    //     } else if(visibility) setVisibility(false)
    // }, [scrollDirection])

    return(
        <HomeBtnContainer className={props.class} visible={scrollDirection}>
            <HomeBtnLink to={props.href} visible={scrollDirection}>
                <HomeBtnIcon src={require('../../../../assets/imgs/back.png')} alt="" />
                <HomeBtnCaption>{props.btnText}</HomeBtnCaption> 
            </HomeBtnLink>
        </HomeBtnContainer>
    );
}

export default HomeBtn