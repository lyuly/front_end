import React from "react";

// App 父组件 Son 子组件

// 函数式Son
function Son(props) {
  // props是一个对象，里面存着父组件传入的所有数据

  console.log(props)

  return (
    <div>我是函数子组件,{props.msg}
      <ul>
        {props.list.map(element => {
          return <ol key={element}>{element}</ol>
        })}
      </ul>
      <button onClick={props.getMsg}>点击</button>
    </div>
  )
}

// 类组件Son
class SonC extends React.Component {
  render () {
    return (
      // 类组件必须通过this关键字获取，去获取这里的props是固定的
      <div>我是类子组件,{this.props.msg}</div>
    )
  }
}

// 类组件写法
class App extends React.Component {

  state = {
    message: 'this is a message',
    list: [1, 2, 3]
  }

  getMsg = () => {
    console.log('父组件中的函数')
  }

  render () {
    return (
      <div>
        <Son msg={this.state.message} list={this.state.list} getMsg={this.getMsg}/>
        <SonC msg={this.state.message}/>
      </div>
    )
  }
}

export default App