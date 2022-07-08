import React from "react";
// 函数组件的创建和渲染
// 创建
// 如何传递自定义参数
// 1. 只需要一个额外参数，{clickHandler} -> {() => clickHandler('自定义参数)}
// 2.既需要传递e也需要传递额外的参数 {(e) => clickHandler(e, '自定义的参数')}
function Hello() {
  const clickHandler = (e, msg) => {
    console.log('函数组件中的事件被触发了', e, msg);
  }
  return <div onClick={(e) => clickHandler(e, '你好，React')}>click me</div>
}

function App() {
  return (
    <div>
      <Hello/>
    </div>
  );
}

export default App;
