import React, { Component } from 'react';
import Person from './Person/Person';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 13123213, name: 'Jorna', age: 32 },
        { id: 3434234234, name: 'Max', age: 28 }
      ],
      showPerson: false
    };
    this.toggleHandler = this.toggleHandler.bind(this);
    // this.changeInputValue = this.changeInputValue.bind(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }
  toggleHandler() {
    const showPerson = this.state.showPerson;
    this.setState({
      showPerson: !showPerson
    });
  }
  changeInputValue = (event, id) => {
    const personId = this.state.persons.findIndex(person => person.id === id)
    console.log(personId)
    // const person = Object.assign({}, this.state.persons[personId])
    const person = {...this.state.persons[personId]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;
    this.setState({
      persons
    })
  }
  deleteItemHandler = id => {
    console.log(id);
    // 获取 state 的 persons
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(id, 1)
    this.setState({
      persons
    });
  };
  render() {
    const style = {
      fontSize: '16px'
    };
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((item, index) => {
            return (
              <Person
                key={item.id}
                delete={() => this.deleteItemHandler(index)}
                name={item.name}
                age={item.age}
                changed={(event) => this.changeInputValue(event, item.id)}/>
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <button style={style} onClick={this.toggleHandler}>
          toggleHandler
        </button>
        {person}
      </div>
    );
  }
}
