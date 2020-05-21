import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../../../assets/imgs/arrow.svg';

const ScrollIndicatorContainer = styled.div`
    position: absolute;
    left: calc(50% - 75px); 
    right: calc(50% - 75px);
    margin: auto;
    bottom: 20px;
    max-width: 150px;
    text-align: center;
    svg {
        width: 35px;
        -webkit-animation: bounce 1s ease-in-out infinite;
        -moz-animation: bounce 1s ease-in-out infinite;
        -ms-animation: bounce 1s ease-in-out infinite;
        -o-animation: bounce 1s ease-in-out infinite;
        animation: bounce 1s ease-in-out infinite;
        -webkit-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
        -moz-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
        box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    }
    @keyframes bounce {
        0% {
            -ms-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -webkit-transform: translateY(0px);
            -o-transform: translateY(0px);
            transform: translateY(0px);
        }
        50% {
            -ms-transform: translateY(10px);
            -moz-transform: translateY(10px);
            -webkit-transform: translateY(10px);
            -o-transform: translateY(10px);
            transform: translateY(10px);
        }
        100% {
            -ms-transform: translateY(0px);
            -moz-transform: translateY(0px);
            -webkit-transform: translateY(0px);
            -o-transform: translateY(0px);
            transform: translateY(0px);
        }
    }
`;

const ScrollCaption = styled.span`
    font-size: .8rem;
    color: #5f5b60;
    margin-bottom: 8px;
    display: block;
    padding: 2px 5px;
    background-color: rgba(240, 237, 238, 0.9);
    -webkit-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    -moz-box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    box-shadow: 2px 2px 5px rgba(176, 176, 176, 0.25);
    @media screen and (max-width: 420px) {
        font-size: .75rem;
    }
`;

const ScrollIndicator = (props) => {  
    return(
        <ScrollIndicatorContainer>
            <ScrollCaption>{props.scrollText}</ScrollCaption> 
            <Arrow />
        </ScrollIndicatorContainer>
    );
}

export default ScrollIndicator