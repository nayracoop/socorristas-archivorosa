import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// import AlphaMatteSprite from '../graphics/AlphaMatteSprite'
import Collage from '../graphics/Collage'
// import FlyingBird from './__FlyingBird'

// const LeaveDiv = styled.div`
//   background: gray;
//   width: 6px;
//   height: 12px;
// `

// const Bird = styled(FlyingBird)`
//   animation-delay: ${props => props.theme.delay}s;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   position: absolute;
// `

const Layer = styled(Collage)`
  z-idnex: 2;
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
  const [ birds, setBirds ] = useState(null)
  let canvasContext = null
  let timer = null
  let currentFrame = 0

  // const count = 6;
  // let delays = []
  // for(let i = 0; i < count; i++) {
  //   delays.push(1 + i * (1.75 + Math.random()*0.4))
  // }
  // let birds = delays.map((delay, index) => <Bird key={index} width={25} theme={ { delay } } />)

  
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
    let size = canvasSprite.height/3
    let currentTime = new Date().getTime()
    for(let i = 0; birds && i < birds.length; i++) {
      canvasContext.save();
      canvasContext.translate(birds[i].x, birds[i].y);
		  canvasContext.rotate((birds[i].x-0)/canvas.current.width*0.5 + (birds[i].finalY-Math.abs(birds[i].finalY-birds[i].y))/(canvas.current.height-birds[i].finalY)*0.5); 
		  // context.scale(1, -1); // Escala negativa da vuelta la imagen
      canvasContext.drawImage(canvasSprite, 
        0, size*birds[i].currentFrame, 
        canvasSprite.width, size, 
        canvasSprite.width/-2, size/-2,
        canvasSprite.width, size)
      canvasContext.restore();
        // (imagen, posRecorteX, posRecorteY, anchoRecorte, altoRecorte, x, y, ancho, alto) Tomo un recorte de la imagen y lo muestro. 
      if(currentTime - birds[i].timeRef > birds[i].delay) {
        if(currentTime - birds[i].timeRef > 120) {
          birds[i].currentFrame++
          birds[i].timeRef = currentTime
        }
  
        birds[i].x += birds[i].cvx
        birds[i].y += (birds[i].finalY+Math.sin(radians(currentFrame+birds[i].x))*100-birds[i].y)*Math.random()*0.008
        birds[i].cvx += (birds[i].vx-birds[i].cvx)*0.005//Math.abs(Math.sin(currentTime+i))*0.05
        birds[i].vy *= 0.99
        birds[i].delay = 0

        if(birds[i].x + canvasSprite.width/2 > canvas.current.width) {
          birds[i] = getBird(i)
          birds[i].delay = 0
        }
      }

      if(birds[i].currentFrame >= 3) birds[i].currentFrame = 0
    }
    currentFrame++
    timer = requestFrame(draw, 20)
  }

  const radians = (degrees) => {
    return degrees * (Math.PI/180);
  }

  const getBird = (i) => {
    return {
      x: Math.random()*60,
      y: canvas.current.height + Math.random()*30,
      vx: 0.75 + Math.random()* 0.5,
      cvx: 0,
      vy: -2 - Math.random()*2,
      finalY: 5 + i + Math.random() * 150,
      currentFrame: Math.floor(Math.random()*3),
      timeRef: new Date().getTime() + 10*i + Math.random()*10,
      delay: 1800 + 350 * i + Math.random()*100
    }
  }

  useEffect(() => {
    if (!birds) {
      let initialBirds = []
      for(let i = 0; i < 30; i++) {
        initialBirds[i] = getBird(i)
      }
      setBirds(initialBirds)
    }
    img.addEventListener('load', loaded)
    img.src = props.src

    return () => { 
      // img.removeEventListener('load', loaded)
      img.removeEventListener('load', loaded)
      const cancelAnimation = cancelAnimationFrame || clearTimeout
      cancelAnimation(timer)
    }
  }, [birds]);

  return (
    <Layer {...props}>
      <Canvas ref={canvas} width={props.width} height={props.height} />
    </Layer>
  );
}

export default Flock