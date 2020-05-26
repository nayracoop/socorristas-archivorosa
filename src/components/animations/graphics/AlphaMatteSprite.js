import React, { useEffect, useState } from 'react'
import styled, { keyframes }  from 'styled-components'

const animation = (y) => keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 ${y}px; }
`;

const Sprite = styled.div`
position: relative;
width: ${props => props.theme.width}px;
::before {
  content: "";
  display: block;
  ${props => props.theme.background ? `
    padding-top: ${100*((props.theme.height/props.frames)/props.theme.width)}%;
    background: url(${props.theme.background}) no-repeat 0 0;
  ` : '' }
    background-size: cover;
    animation: ${props => animation(-props.theme.height)} ${props => props.duration} steps(${props => props.frames}) infinite;
  }
`;

const AlphaMatteSprite = (props) =>{

  const [ imageData, setImageData ] = useState({ background: null, width: 0, height: 0 })
  const img = document.createElement('img')
  
  const loaded = () => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const mask = document.createElement('canvas')
    const maskContext = mask.getContext('2d')
    let imgData

    mask.width = img.naturalWidth
    mask.height = img.naturalHeight
    canvas.width = Math.floor(img.naturalWidth/2)
    canvas.height = img.naturalHeight
		maskContext.drawImage(img, 0, 0)
		imgData = maskContext.getImageData(0, 0, mask.width, mask.height)
		for(let j = 0; j < canvas.height; j++) {
			for(let i = 0; i < canvas.width; i++) {
				const index = (mask.width*j+i)*4
        const indexMascara = (mask.width*j+(i+canvas.width))*4
				const gray = imgData.data[indexMascara+1]
				imgData.data[index+3] = gray
			}
		}
		maskContext.putImageData(imgData, 0, 0)
    context.drawImage(mask, 0, 0)
    setImageData({
      background: canvas.toDataURL(),
      width: canvas.width,
      height: canvas.height
    })
  }
  
  useEffect(() => {    
    img.src = props.src
    img.addEventListener('load', loaded)
    
    return () => { 
      img.removeEventListener('load', loaded)
    }
  })
  return (
    <Sprite className={props.className} style={props.style} theme={imageData} frames={props.frames ? props.frames : 1 } duration={props.duration ? props.duration : '500ms' }></Sprite>
  );
}

export default AlphaMatteSprite