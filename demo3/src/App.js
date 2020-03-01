import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         { name: 'Jorna', age: 32 },
//         { name: 'Max', age: 28 }
//       ],
//       showPerson: false
//     };
//   }
//   toggleChangedHandler = () => {
//     const showPerson = this.state.showPerson;
//     this.setState({
//       showPerson: !showPerson
//     });
//   };
//   changeInputValue = (e) => {
//     this.setState({
//       persons: [
//         { name: 'Jorna', age: 32 },
//         { name: e.target.value, age: 28 }
//       ],
//     })
//   }
//   render() {
//     const style = {
//       fontSize: '18px',
//       padding: '10px'
//     }
//     return (
//       <div className="App">
//         <button
//           style={style}
//           onClick={this.toggleChangedHandler.bind(this)}>
//           toggleChangedHandler</button>
//         {
//           this.state.showPerson ?
//           <div>
//             <Person
//               name={this.state.persons[0].name}
//               age={this.state.persons[0].age}
//               changed={this.changeInputValue.bind(this)} />
//             <Person
//               name={this.state.persons[1].name}
//               age={this.state.persons[1].age}
//               changed={this.changeInputValue.bind(this)} />
//           </div> : null
//         }
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Jorna', age: 32 },
        { name: 'Max', age: 28 }
      ],
      showPerson: false
    };
  }
  toggleChangedHandler() {
    const showPerson = this.state.showPerson;
    this.setState({
      showPerson: !showPerson
    });
  }
  changeInputValue(e) {
    this.setState({
      persons: [
        { name: 'Jorna', age: 32 },
        { name: e.target.value, age: 28 }
      ]
    });
  }
  render() {
    const style = {
      fontSize: '18px',
      padding: '10px'
    }
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.changeInputValue.bind(this)}
             />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changeInputValue.bind(this)} />
        </div>
      )
    }
    return (
      <div>
        <button style={style}
          onClick={this.toggleChangedHandler.bind(this)}>toggleChangeHandler</button>
        {person}
      </div>
    )
  }
}

export default App;
