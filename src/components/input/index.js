import React from 'react'
import {InputContainer} from './styles'

function input({value, onChange}) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} />
    </InputContainer>
  )
}

export default input;
