import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

export const useParallax = (offsets = -0.5) => {

  const [scrollY, setScrollY] = useState(0)
  
  function onScroll() {    
    const scrollPos = Array.isArray(offsets) ? offsets.map(offset => window.pageYOffset * offset) : window.pageYOffset * offsets
    setScrollY(scrollPos); 
  }   
  
  useEffect(() => {    
    // function watchScroll() {      
    // }    
    // watchScroll(); 
    window.addEventListener("scroll", onScroll); 
    
    return () => { 
      window.removeEventListener("scroll", onScroll) 
    }
  })
  
  return scrollY
}

// const WithState = (Component) => {
//   const WithStateComponent = () => {
//     const [state, dispatch] = useState(0);
//     return <Component state={state} dispatch={dispatch} />;
//   }
//   return WithStateComponent;
// }
