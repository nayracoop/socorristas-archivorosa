import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'

export const useParallax = (offsets = -0.5, min = -99999, max = 99999) => {

  const [scrollY, setScrollY] = useState(0)

  function truncate(value) {
    if(min >= max) return value
    if(value > max) return max
    if(value < min) return min
    return value
  }
  
  function onScroll() {    
    const scrollPos = Array.isArray(offsets) ? offsets.map(offset => truncate(window.pageYOffset * offset)) : truncate(window.pageYOffset * offsets)
    setScrollY(scrollPos); 
  }   
  
  useEffect(() => {    
    window.addEventListener("scroll", onScroll); 
    return () => { 
      window.removeEventListener("scroll", onScroll) 
    }
  })
  
  return scrollY
}