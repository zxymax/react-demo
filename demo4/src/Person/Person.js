import React from 'react';

function Person(props) {
  const style = {
    width: '300px',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc'
  };
  return (
    <div style={style} onClick={props.click}>
      <p>
        Username: {props.name}, age: {props.age}
        <span
          style={{
            color: '#ff00ff',
            marginLeft: '10px',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer'
          }}
          onClick={props.delete}
        >
          x
        </span>
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
}

export default Person;
