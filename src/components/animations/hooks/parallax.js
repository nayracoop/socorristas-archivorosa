import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

export const useParallax = (offset = -0.5) => {

  const [scrollY, setScrollY] = useState(0)
  
  function onScroll() {    
    const scrollPos = window.pageYOffset * offset
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
