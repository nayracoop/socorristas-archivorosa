import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

export const withParallax = (Component) => {

  const [scrollY, setScrollY] = useState(0)

  const ParallaxComponent = styled(Component)`
    position: fixed;
    top: -${props => props.theme.top}px;
  `

  function onScroll() {    
    setScrollY(window.pageYOffset); 
  }   
  
  useEffect(() => {    
    // function watchScroll() {      
    // }    
    // watchScroll(); 
    window.addEventListener("scroll", onScroll); 
    
    return () => {      
      window.removeEventListener("scroll", onScroll); 
    }; 
 });

  return props => (<ParallaxComponent theme={{ top: scrollY }} {...props} />)
}

