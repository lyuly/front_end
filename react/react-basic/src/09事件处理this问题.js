import React from "react";

class Test extends React.Component {
  // constructor() {
  //   super()
  //   /* 
  //   使用bind强行修正我们的this指向
  //   相当于在类组件初始化的阶段，就可以把回调函数的this修正到
  //   永远指向当前组件实例对象
  //   */
  //   this.handler = this.handler.bind(this)
  // }

  handler = () => {
    console.log(this)
    // this.setState去修改数据还可以吗？就会报错
  }

  render() {
    // render函数中的this已经被react内部修正了
    // 这里的this指向当前的组件实例对象
    return (
      // 如果不同constructor做修正，直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向也是ok的
      // <button onClick={this.handler}>click</button>
      // <button onClick={() => this.handler()}>click</button>
      <button onClick={this.handler}>click</button>
    )
  }
}

function App() {
  return (
    <div>
      <Test/>
    </div>
  )
}

export default App