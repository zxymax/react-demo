### React
- props 传值
- event 事件
- 数组列表操作
- if else 使用
- 浅拷贝

`src/ 创建 文件夹 Person，在 Person 下创建 Person.js 组件` 代码如下：
```javascript
import React from 'react';

function Person(props) {
  const style = {
    width: '300px',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc'
  }
  return (
    <div>
      <p>Username: {props.name}, age: {props.age}
      <span
        style={style}
        onClick={props.delete}
        >x</span></p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;
```
在 `App.js` 组件，代码如下：
```javascript
import React, { Component } from 'react';
import Person from './Person/Person';

export default class App extends Component {
  constructor(props) {
    super(props);
    // 初始化数据
    this.state = {
      persons: [
        { id: 13123213, name: 'Jorna', age: 32 },
        { id: 3434234234, name: 'Max', age: 28 }
      ],
      showPerson: false
    }
    this.toggleChangeHandler = this.toggleChangeHandler(this);
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }
  changeInputValue = (event, id) => {
    const personId = this.state.persons.findIndex(item => {
      return item.id === id
    })
    const person = {...this.state.persons[personId]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;
    this.setState({
      persons
    })
  }
  deleteItemHandler = (id) => {
    const persons = [...this.state.persons];
    persons.splice(id, 1);
    this.setState({
      persons
    })
  }
  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {
            this.state.persons.map((item, index) => {
              return (
                <Person
                  key={index}
                  name={item.name}
                  age={item.age}
                  changed={(event) => this.changeInputValue(event, index)} />
              )
            })
          }
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.toggleChangeHandler}>toggleChangeHandler</button>
        {person}
      </div>
    )
  }
}
```

