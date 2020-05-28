import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: 40px;
  }

`;

const NavImage = styled.img`
  max-height: 40px;
  transition: all ease-in-out .3s;
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    max-height: 30px;
  }
  `;

const NavArrow = styled.img`
  width: 100%;
  max-width: 70px;
  margin-top: 8px;
  transform: ${props => props.prev ? 'rotate(-175deg)' : 'none'};
  transition: all ease-in-out .2s;
  @media (max-width: ${props => props.theme.pageWidth.xl}px) {
    max-width: 30px;
  }
  
  &:hover {
    transform:  ${props => props.prev ? 'rotate(-185deg)' : 'rotate(10deg)'};
  }
`;

const ChapterNavItem = (props) => {
  return (
    <NavLink {...props}>
      <NavImage src={require('../../../../assets/imgs/numeros/' + props.number + '.png')} />
      <NavArrow src={require('../../../../assets/imgs/numeros/arrow.png')} prev={props.prev} />
    </NavLink>
  );
}

export default ChapterNavItem