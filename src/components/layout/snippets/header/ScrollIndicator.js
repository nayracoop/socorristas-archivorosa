import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../../../assets/imgs/arrow.svg';

const ScrollIndicatorContainer = styled.div`
    position: absolute;
    left: 0; 
    right: 0;
    margin: 0 auto;
    bottom: 20px;
    max-width: 150px;
    text-align: center;
    cursor: pointer;
    z-index: 9999;

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

const ScrollIndicator = (props) => {

    function scrollDown() {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth',
        })
    }

    return (
        <ScrollIndicatorContainer onClick={scrollDown}>
            <Arrow />
        </ScrollIndicatorContainer>
    );
}

export default ScrollIndicator