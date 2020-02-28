import React, { Component, Fragment } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['taisuke', 'hong10']
    }
    this.changeValue = this.changeValue.bind(this);
    // this.addClick = this.addClick.bind(this)
  }
  changeValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  render() {
    return (
      <Fragment>
        <h2>input click</h2>
        <input type="text" value={this.state.inputValue}
          onChange={this.changeValue} />
          <button onClick={this.addClick.bind(this)}>添加</button>
        <ul className="list">
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Input;
