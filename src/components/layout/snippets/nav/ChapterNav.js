import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBar = styled.nav`
    position: sticky;
    bottom: 2vh;
    width: 95%;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 55px;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        bottom: 4vh;
        padding: 0;
    }
`;

const NavList = styled.ul`
    display: flex; 
    justify-content: space-between;
`;

const NavItem = styled.li`
    @media screen and (max-width: ${(props) => props.theme.pageWidth.l}px) {
        background-color: #e7e3e1;
        padding: 5px 25px;
        box-shadow: 0px 0px 5px rgb(176, 176, 176);
    }
`;

const NavLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        max-width: 40px;
    }
`;

const NavPrevItem = styled.li`
`;

const NavNextItem = styled.li`
`;

const NavPrevLink = styled(Link)`
`;

const NavNextLink = styled(Link)`
`;

const NavImagePrev = styled.img`
    max-height: 40px;
`;

const NavImageNext = styled.img`
    max-height: 40px;
`;

const NavArrow = styled.img`
    width: 100%;
    max-width: 70px;
    margin-top: 8px;
    &.prev-arrow {
        transform: rotate(-175deg)
    }
`;

const ChapterNav = (props) => {
    return (
        <NavBar>
            <NavList>
                <NavItem>
                    <NavLink to={props.prev.link}>
                        <NavImagePrev src={require('../../../../assets/imgs/numeros/'+props.prev.index+'.png')} />
                        <NavArrow className="nav-arrows prev-arrow" src={require('../../../../assets/imgs/numeros/arrow.png')} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={props.next.link}>
                        <NavImageNext src={require('../../../../assets/imgs/numeros/'+props.next.index+'.png')} />
                        <NavArrow className="nav-arrows next-arrow" src={require('../../../../assets/imgs/numeros/arrow.png')} />
                    </NavLink>
                </NavItem>
            </NavList>
        </NavBar>        
    );
}

export default ChapterNav