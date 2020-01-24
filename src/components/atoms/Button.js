import React from 'react'
import styled from 'styled-components'


const button = (props) => {
    return (
        <button onClick={props.click}>{props.text}</button>
    );
}

export default button