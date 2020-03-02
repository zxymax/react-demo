import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
  }
  inputChangedHandler(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  deleteCharHandler = id => {
    const text = this.state.userInput.split('');
    text.splice(id, 1);
    const updateText = text.join('');
    this.setState({ userInput: updateText });
  };
  render() {
    const charList = this.state.userInput.split('').map((item, index) => {
      return (
        <Char
          key={index}
          character={item}
          deleted={() => {this.deleteCharHandler(index)}}
        />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler.bind(this)}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
export default App;
