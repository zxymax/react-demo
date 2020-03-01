import React from 'react';

export default function Person(props) {
  return (
    <div>
      <p>person: {props.name} age: {props.age}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  )
}
