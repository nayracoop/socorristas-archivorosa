import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Collage from '../graphics/Collage'

const Leaves = styled(Collage)`
  max-width: none;
`

const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Flock = (props) => {

  const canvas = useRef()
  const canvasSprite = document.createElement('canvas')
  const img = document.createElement('img')
  const requestFrame = requestAnimationFrame || setTimeout;
  const [ leaves, setLeaves ] = useState(null)
  let canvasContext = null
  let timer = null
  let currentFrame = 0

  const loaded = () => {
    canvasContext = canvas.current.getContext('2d')
    createSprite()
    
    draw()
  }

  const createSprite = () => {
    const context = canvasSprite.getContext('2d')
    const mask = document.createElement('canvas')
    const maskContext = mask.getContext('2d')
    let imgData

    mask.width = img.naturalWidth
    mask.height = img.naturalHeight
    canvasSprite.width = Math.floor(img.naturalWidth/2)
    canvasSprite.height = img.naturalHeight
		maskContext.drawImage(img, 0, 0)
		imgData = maskContext.getImageData(0, 0, mask.width, mask.height)
		for(let j = 0; j < canvasSprite.height; j++) {
			for(let i = 0; i < canvasSprite.width; i++) {
				const index = (mask.width*j+i)*4
        const indexMascara = (mask.width*j+(i+canvasSprite.width))*4
				const gray = imgData.data[indexMascara+1]
				imgData.data[index+3] = gray
			}
		}
		maskContext.putImageData(imgData, 0, 0)
    context.drawImage(mask, 0, 0)
  }

  const draw = () => {
    canvasContext.clearRect(0,0,canvas.current.width,canvas.current.height)
    let size = canvasSprite.height/30
    let currentTime = new Date().getTime()
    for(let i = 0; leaves && i < leaves.length; i++) {
      canvasContext.save();
      canvasContext.translate(leaves[i].x, leaves[i].y);
		  canvasContext.rotate(radians(leaves[i].rot)); 
		  // context.scale(1, -1); // Escala negativa da vuelta la imagen
      canvasContext.drawImage(canvasSprite, 
        0, size*leaves[i].currentFrame, 
        canvasSprite.width, size, 
        canvasSprite.width/-2, size/-2,
        canvasSprite.width, size)
      canvasContext.restore();

      leaves[i].x += (leaves[i].vx + (0.2 + Math.sin(radians(currentFrame+i*10))*0.4)) * 0.75
      leaves[i].y += (Math.sin(radians((currentFrame%800)+leaves[i].x)))*0.5
      leaves[i].rot += leaves[i].vrot

      if(leaves[i].x + canvasSprite.width/2 > canvas.current.width) {
        leaves[i].x = canvasSprite.width/2
        leaves[i].vx = 1 + Math.random()
        leaves[i].y = canvas.current.height/4 + Math.random()*canvas.current.height/2
        leaves[i].rot = Math.random()*360
        leaves[i].vrot = -1 + Math.random()*2
      }

    }
    currentFrame++
    timer = requestFrame(draw, 20)
  }

  const radians = (degrees) => {
    return degrees * (Math.PI/180);
  }

  const getLeave = (i) => {
    return {
      x: canvas.current.width/30 * i - 25 + Math.random()*50,
      y: canvas.current.height/4 + Math.random()*canvas.current.height/2,
      rot: Math.random()*360,
      vx: 1 + Math.random(),
      vrot: -1 + Math.random()*2,
      currentFrame: i,
    }
  }

  useEffect(() => {
    if (!leaves) {
      let initialLeaves = []
      for(let i = 0; i < 30; i++) {
        initialLeaves[i] = getLeave(i)
      }
      setLeaves(initialLeaves)
    }
    img.addEventListener('load', loaded)
    img.src = props.src

    return () => { 
      img.removeEventListener('load', loaded)
      const cancelAnimation = cancelAnimationFrame || clearTimeout
      cancelAnimation(timer)
    }
  }, [leaves]);

  return (
    <Leaves {...props}>
      <Canvas ref={canvas} width={props.width} height={props.height} />
    </Leaves>
  );
}

export default Flock