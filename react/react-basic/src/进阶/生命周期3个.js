import React from "react"

class Test extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div>Test</div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor')
  }

  state = {
    count: 0,
    flag: true
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: false
    })
  }

  // 组件挂载后执行（dom渲染完成），初始化的时候执行一次
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  // render每次组件渲染都会触发
  render() {
    console.log('render')
    return (
      <div>
        {this.state.flag ? <Test/> : null}
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </div>
    )
  }
}

export default App