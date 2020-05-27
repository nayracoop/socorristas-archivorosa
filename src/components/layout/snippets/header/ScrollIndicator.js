import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useScrollPosition } from '../../../animations/hooks/parallax';

const bounce = keyframes`
    0% { transform: translateY(-3px); }
    100% { transform: translateY(3px); }
`;

// const inOut = keyframes`
//     0% { transform: rotateX(90deg); opacity: 0; }
//     10% { transform: rotateX(90deg); opacity: 1; }
//     100% { transform: rotateX(0deg); opacity: 1; }
// `;

const ScrollIndicatorContainer = styled.div`
    position: fixed;
    left: 0; 
    right: 0;
    margin: 0 auto;
    bottom: 10px;
    width: 55px;
    text-align: center;
    cursor: pointer;
    z-index: 9999;
    perspective: 250px;

    transition: all 500ms ease-in-out;
    &:hover, &:active {
        img { filter: brightness(.85) }
    }

    ${props => !props.visible ? 'pointer-events: none; transform: translateY(70px);' : 'transition-delay: 300ms;' }

    @media (max-width: ${props => props.theme.pageWidth.s}px) {
        display: none;
    }
`;
const ArrowImage = styled.img`
    width: 55px;
    animation: ${bounce} 1s ease-in-out alternate infinite;
`;

const ScrollIndicator = (props) => {

    const scrollPosition = useScrollPosition()
    const [ visibility, setVisibility ] = useState(true)

    useEffect(() => {    
        if(scrollPosition > 30) {
            if(visibility) setVisibility(false)
        } else if(!visibility) setVisibility(true)
    }, [scrollPosition])

    function scrollDown() {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth',
        })
    }

    return (
        <ScrollIndicatorContainer onClick={scrollDown} visible={visibility}>
            <ArrowImage visible={visibility} src={require('../../../../assets/imgs/scroll-arrow.png')} />
        </ScrollIndicatorContainer>
    );
}

export default ScrollIndicator