import React, { createContext } from "react";
/* 
App -> A -> C
App -> C
1. 上层组件和下层组件是相对的只要存在就可以使用，通常我们都会通过app作为数据提供方
2. 这里涉及到的语法都是固定的，有两处，提供的位置 value提供数据 获取的问题  {value => 使用value
导入createContext方法并执行，结构提供者和消费者
*/

const { Provider, Consumer } = createContext()

class ComA extends React.Component {
  render() {
    return (
      <div>
        <p>我是ComA组件</p>
        <ComC/>
      </div>
    )
  }
}

class ComC extends React.Component {
  render() {
    return (
      <div>
        <p>我是ComC组件</p>
        <Consumer>
          {value => <span>{value}</span>}
        </Consumer>
      </div>
    )
  }
}

class App extends React.Component {

  state = {
    msg: '你好👋'
  }

  render () {
    return (
      <Provider value={this.state.msg}>
        <div>
          <ComA/>
        </div>
      </Provider>
    )
  }
}

export default App