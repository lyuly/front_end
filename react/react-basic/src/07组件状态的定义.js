import React from "react"

class TestComponent extends React.Component {
  // 定义组件状态
  state = {
    // 定义各种属性，全都是当前组件的状态
    name: 'pig'
  }

  //事件回调函数
  changeName = () => {
    // 修改state中的状态name
    // 不可以直接赋值修改，必须通过一个方法 setState
    this.setState({
      name: 'fanys'
    })
  }

  render() {
    return (
      <div>
        this is TestComponent
        当前name为：{this.state.name}
        <button onClick={this.changeName}>修改</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <TestComponent/>
    </div>
  )
}

export default App