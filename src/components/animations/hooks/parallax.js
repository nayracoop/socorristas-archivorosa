import React, { useState, useEffect } from "react";

export const useScrollPosition = () => {

  const [scrollInfo, setScrollInfo] = useState(0)

  function onScroll() {  
    setScrollInfo(window.pageYOffset); 
  }   
  
  useEffect(() => {    
    window.addEventListener("scroll", onScroll); 
    return () => { 
      window.removeEventListener("scroll", onScroll) 
    }
  })
  
  return scrollInfo
}

export const useParallax = (offsets = -0.5, min = -99999, max = 99999) => {

  const [scrollY, setScrollY] = useState(0)
  const y = useScrollPosition()

  function truncate(value) {
    if(min >= max) return value
    if(value > max) return max
    if(value < min) return min
    return value
  }

  useEffect(() => {    
    const scrollPos = Array.isArray(offsets) ? offsets.map(offset => truncate(y * offset)) : truncate(y * offsets)
    setScrollY(scrollPos); 
  }, [y])
  
  return scrollY
}

export const useScrollDirection = () => {

  const [direction, setDirection] = useState( { lastPosition: 0, stringValue: 'down' } )
  const y = useScrollPosition()

  useEffect(() => {    
    const difference = y - direction.lastPosition
    const currentDirection = { lastPosition: y, stringValue: difference >= 0 ? 'down' : 'up' } 
    setDirection(currentDirection)
  }, [y])
  
  return direction.stringValue
}