import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr />
      <Input />
    </div>
  );
}

export default App;
