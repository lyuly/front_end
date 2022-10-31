import React from "react"

function Hello() {
  const clickHandler = (e) => {
    console.log('函数组件中的事件被触发了click', e)
  }

  return <div onClick={clickHandler}>Hello</div>
}

class HelloComponent extends React.Component {
  // 事件回调函数 标准写法，避免this指向问题
  // 这样写，this指向的是当前实例对象
  clickHandler = (msg) => {
    console.log('类组件中的事件被触发了', msg)
  }

  render() {
    return <div onClick={() => this.clickHandler('okk')}>this is Hello class Component</div>
  }
}

function App() {
  return (
    <div>
      <Hello/>
      <HelloComponent/>
    </div>
  )
}

export default App