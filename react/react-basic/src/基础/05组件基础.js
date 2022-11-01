// 函数组件的创建和渲染
/* 
创建
名称首字母必须大写
必须有返回值
*/

import React from "react"
/* 
类组件
类名称也必须大写
继承React.Component父类
*/

class HelloComponent extends React.Component {
  render() {
    return <div>this is class Component</div>
  }
}

function Hello() {
  return (
    <div>Hello React</div>
  )
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