import React from 'react'

export default function Validation(props) {
  let validationMessage = 'Text long length';
  if (props.inputLength <= 5) {
    validationMessage = 'Text short length';
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}
