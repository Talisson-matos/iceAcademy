import React from 'react'
import styled from 'styled-components'

const Button = ({type, text, onclick}) => {

const Buttonbtn = styled.button`
    cursor: pointer;
    font-size: 1.2em;
    border: none;
    width: 100%;
    heigth: 100%
    padding: 1rem;    
`
const ButtonField = styled.div`    
    width: 100%;
    heigth: auto;
    margin: 1rem 0   
    `


  return (
    <ButtonField>
        <Buttonbtn onClick={onclick}  type={type}>{text}</Buttonbtn>
    </ButtonField>
  )
}

export default Button