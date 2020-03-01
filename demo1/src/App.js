// import React from 'react';
// import React, { Component } from 'react';


import React, { useState } from 'react';

import Person from './Person/Person';


// 函数组件
// const App = () => {
//   return (
//     <div>
//       <Person name="Jorna" age="30" />
//       <Person name="Max" age="32">
//         My Hobbies is: dancing
//       </Person>
//       <Person name="Zain" age="29" />
//     </div>
//   )
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       persons: [
//         { name: 'Jorna', age: 30 },
//         { name: 'Max', age: 32 },
//         { name: 'Zain', age: 29 }
//       ],
//       otherState: 'some other value here'
//     }
//     this.switchNameHandler = this.switchNameHandler.bind(this)
//   }
//   switchNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: 'Jorna Jan', age: 30 },
//         { name: 'Maxwell', age: 32 },
//         { name: 'Zain', age: 29 }
//       ]
//     })
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >
//           My Hobbies is: dancing
//         </Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     )
//   }
// }


const MApp = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Jorna', age: 30 },
      { name: 'Max', age: 32 },
      { name: 'Zain', age: 29 }
    ],
    otherState: 'some other value here'
  });
  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Maxwell', age: 32 },
        { name: 'Zain', age: 29 }
      ],
      otherState: personState.otherState
    })
  }
  const changeInputValue = (e) => {
    setPersonState({
      persons: [
        { name: 'Jorna Jan', age: 30 },
        { name: e.target.value, age: 32 },
        { name: 'Zain', age: 29 }
      ]
    })
  }
  const style = {
    backgroundColor: '#fff',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }
  return (
    <div>
      <button
        style={style}
        onClick={switchNameHandler.bind(this, 'Jorna Jan')}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        click={switchNameHandler.bind(this, "Maxwell!")}
        name={personState.persons[1].name} age={personState.persons[1].age}
        changed={changeInputValue}>
        My Hobbies is: dancing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default MApp;
