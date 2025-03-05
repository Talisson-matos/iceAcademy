import React from 'react'
import styled from 'styled-components'

const InputField = styled.div`
width:100%;       
display: flex;
flex-direction: column;
margin: 1rem 0

`
const Label = styled.label`
text-transform: capitalize;
color: #DDD
`
const InputControler = styled.input`
width: 100%;
padding: 5px 10px;
outline: none;
border: none;
font-size: 1.2em;      

`

const Input = ({htmlFor,type,id,placeholder,label, onChange,value}) => {

  return (
    <InputField>
        <Label htmlFor={htmlFor}>{label}</Label>
        <InputControler onChange={onChange} type={type} id={id} placeholder={placeholder} value={value} />
    </InputField>
  )
}

export default Input