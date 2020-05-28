import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
//import { ReactComponent as HomeBtnIcon } from '../../../../assets/imgs/back.svg';

const HomeBtnContainer = styled.div.attrs(props => ({
    className: props.class,
}))`
    position: fixed;
    left: 15px;
    top: 15px;
    z-index: 9999;
    max-width: 150px;
    svg {
        width: 16px;
    }
`;
const HomeBtnLink = styled(Link)`
    display: flex;
    padding: 8px 12px;
    transition: all ease-in .2s;
    display: flex;
    align-items: center;
    &:hover {
        text-decoration: none;
    }
`;
const HomeBtnIcon = styled.img`
    height: 18px;
//    opacity: .85;

`;

const HomeBtnCaption = styled.span`
    font-size: 1.7rem;
    color: #04090d;
	font-family: 'Caveat', 'Roboto Slab', serif;
	font-weight: 400;
    /*width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    margin-left: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;*/
    @media screen and (max-width: 420px) {
        font-size: 1.6rem;
    }
`;

const HomeBtn = (props) => {  
    return(
        <HomeBtnContainer className={props.class}>
            <HomeBtnLink to={props.href}>
                <HomeBtnIcon src={require('../../../../assets/imgs/back.png')} />
                <HomeBtnCaption>{props.btnText}</HomeBtnCaption> 
            </HomeBtnLink>
        </HomeBtnContainer>
    );
}

export default HomeBtn