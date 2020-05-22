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
    li {
        @media screen and (max-width: 768px) {
            background-color: #e7e3e1;
            padding: 5px 25px;
            -webkit-box-shadow: 0px 0px 5px rgb(176, 176, 176);
            -moz-box-shadow: 0px 0px 5px rgb(176, 176, 176);
            box-shadow: 0px 0px 5px rgb(176, 176, 176);
        }
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (max-width: 768px) {
                max-width: 40px;
            }
        }
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
                <NavPrevItem>
                    <NavPrevLink>
                        <NavImagePrev src={require('../../../../assets/imgs/numeros/11.png')} />
                        <NavArrow className="nav-arrows prev-arrow" src={require('../../../../assets/imgs/numeros/arrow.png')} />
                    </NavPrevLink>
                </NavPrevItem>
                <NavNextItem>
                    <NavNextLink>
                        <NavImageNext src={require('../../../../assets/imgs/numeros/12.png')} />
                        <NavArrow className="nav-arrows next-arrow" src={require('../../../../assets/imgs/numeros/arrow.png')} />
                    </NavNextLink>
                </NavNextItem>
            </NavList>
        </NavBar>        
    );
}

export default ChapterNav