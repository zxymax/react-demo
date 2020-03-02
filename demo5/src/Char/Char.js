import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid #ccc',
    textAlign: 'center'
  }
  return (
    <div
      style={style}
      onClick={props.deleted}>{props.character}
    </div>
  )
}

export default Char;
