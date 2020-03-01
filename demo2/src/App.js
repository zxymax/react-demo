// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

// function App() {
//   return (
//     <div className="App">
//       <UserInput />
//       <UserOutput userName="Max" />
//       <UserOutput userName="Max" />
//       <UserOutput userName="Max" />
//     </div>
//   );
// }
class App extends Component {
  state = {
    username: 'supermax'
  }
  usernameChangedHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
