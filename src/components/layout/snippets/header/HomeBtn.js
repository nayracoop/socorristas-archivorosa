import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { ReactComponent as HomeBtnIcon } from '../../../../assets/imgs/back.svg';

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
    background-color: #D5B9D6;
    transition: all ease-in .2s;
    &:hover {
        background: #a9727d;
        text-decoration: none;
    }
`;
const HomeBtnCaption = styled.span`
    font-size: 1.125rem;
    color: #fff;
    margin-left: 10px;
    -webkit-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    -moz-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    @media screen and (max-width: 420px) {
        font-size: 1rem;
    }
`;

const HomeBtn = (props) => {  
    return(
        <HomeBtnContainer className={props.class}>
            <HomeBtnLink to={props.href}>
                <HomeBtnIcon />
                <HomeBtnCaption>{props.btnText}</HomeBtnCaption> 
            </HomeBtnLink>
        </HomeBtnContainer>
    );
}

export default HomeBtn