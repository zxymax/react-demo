#### React
- `App.js` 组件中创建 `input` 文本框元素
- 创建一个 `Validation` 组件，用于接收文本的长度
- 在验证过程中，根据文本长度输出‘太长’或‘太短’语句
- 创建 `Char` 组件，渲染 `Char` 组件列表，其中每个 `Char` 组件接收一个不同的输入文本
- 单击 `Char` 每个组件文本时，可以删除

`src/` 下创建 `Validation.js` 组件，代码如下：
```javascript
import React from 'react';

const Validation = (props) => {
  const validationMessage = 'Text too long';
  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }
  return (
    <div>
      {validationMessage}
    </div>
  )
}

export default Validation;
```
`src/` 下创建 `Char.js` 组件，代码如下：
```javascript
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
      onClick={props.deleted}>
    </div>
  )
}
```
`App.js` 代码如下：
```javascript
import React, { Component } from 'react';
import './App.css';
import Validation from 'Validation/Validation';
import Char from './Char/Char';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    },
  }
  inputChangedHandler = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }
  deleteChangedHandler = (id) => {
    const text = this.state.userInput.split('');
    text.splice(id, 1);
    const updateText = text.join('');
    this.setState({
      userInput: updateText
    })
  }
  render() {
    const charList = this.state.userInput.split('').map((item, index)=>{
      return <Char
        key={index}
        character={item}
        deleted={() => {this.deleteChangedHandler(index)}} />
    })
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.inputChangedHandler.bind(this)}/>
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
      </div>
    )
  }
```
