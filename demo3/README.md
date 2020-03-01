### React

- props 传值
- event 事件
- style 样式
- if else 使用

`src/ 创建 文件夹 Person，在 Person 下创建 Person.js 组件` 代码如下：
```javascript
import React from 'react';

function Person (props) {
  return (
    <div>
      <p>userName: {props.name}, age: {props.age}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  )
}

export default Person;
```

在 `App.js` 组件，代码如下：

###### 第一种写法

```javascript
import React, { Component } from 'react';
// 引入 Person 组件
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    // 初始化数据
    this.state = {
      persons: [
        { name: 'Jorna', age: 32 },
        { name: 'Max', age: 28 }
      ],
      showPerson: false
    };
  }
  toggleChangedHandler = () => {
    const showPerson = this.state.showPerson;
    // 更改 state 值
    this.setState({
      showPerson: !showPerson
    });
  };
  changeInputValue = e => {
    // e.target.value 获取 input 值
    persons: [
      { name: 'Jorna', age: 32 },
      { name: e.target.value, age: 28 }
    ];
  };
  render() {
    // 书写元素样式
    const style = {
      fontSize: '18px',
      padding: '10px'
    };
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.toggleChangedHandler.bind(this)}>
          toggleChangedHandler
        </button>
        {this.state.showPerson ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changed={this.changeInputValue.bind(this)}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.changeInputValue.bind(this)}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
```

###### 第二种写法
```javascript
import React, { Component } from 'react';
// 引入 Person 组件
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    // 初始化数据
    this.state = {
      persons: [
        { name: 'Jorna', age: 32 },
        { name: 'Max', age: 28 }
      ],
      showPerson: false
    };
  }
  toggleChangedHandler = () => {
    const showPerson = this.state.showPerson;
    // 更改 state 值
    this.setState({
      showPerson: !showPerson
    });
  };
  changeInputValue = e => {
    // e.target.value 获取 input 值
    persons: [
      { name: 'Jorna', age: 32 },
      { name: e.target.value, age: 28 }
    ];
  };
  render() {
    // 书写元素样式
    const style = {
      fontSize: '18px',
      padding: '10px'
    };
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
              changed={this.changeInputValue.bind(this)}
            />
          </div>
      )
    }
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.toggleChangedHandler.bind(this)}>
          toggleChangedHandler
        </button>
        { person }
      </div>
    );
  }
}

export default App;
```

