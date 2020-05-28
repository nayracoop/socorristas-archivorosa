import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ChapterNavItem from './ChapterNavItem';
import { useScrollPosition } from '../../../animations/hooks/parallax';

const NavBar = styled.nav`
    position: sticky;
    bottom: 12px;
    width: 95%;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 55px;
    margin-bottom: 30px;
    @media screen and (max-width: 1221px) {
        width: 100%;
        bottom: 12px;
        padding: 0;
    }

    transition: all 400ms ease-in-out;
    ${props => props.visible ? 'pointer-events: none; transform: translateY(100px); transition-duration: 200ms;' : '' }
`;

const NavList = styled.ul`
    display: flex; 
    justify-content: space-between;
`;
    
const NavItem = styled.li`
    @media screen and (max-width: 1221px) {
        background-color: #e7e3e1;
        padding: 5px 25px;
        box-shadow: 0px 0px 5px rgb(176, 176, 176);
    }        
`;

const ChapterNav = (props) => {

    const scrollPosition = useScrollPosition()

    return (
        <NavBar visible={scrollPosition < 350}>
            <NavList>
                <NavItem>
                    <ChapterNavItem prev="true" to={props.prev.link} number={props.prev.index} />
                </NavItem>
                <NavItem>
                    <ChapterNavItem to={props.next.link} number={props.next.index} />
                </NavItem>
            </NavList>
        </NavBar>        
    );
}

export default ChapterNav