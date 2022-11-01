// 通过类组件修改状态的方式 counter

import React from "react"

class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.changeCount}>点击</button>
      </div>
    )
  }
}

// 根组件
function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App