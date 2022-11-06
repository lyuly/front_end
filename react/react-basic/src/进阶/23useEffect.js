import { useState, useEffect } from "react"

/* 
1.导入useEffect函数
2.在函数组件中执行传入回调，并且定义副作用
3.当我们通过修改状态更新组件时，副作用也会不断执行

依赖想控制副作用的执行时机
1. 默认状态（无依赖项）
组件初始化时执行一次，等到每次数据修改组件更新再次执行
2. 添加一个空数组依赖项
组件只在初始化的时候执行一次
3. 依赖特定项的改变才执行
*/

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('pig')
  useEffect(() => {
    document.title = count
    console.log('副作用执行了')
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName(name + 'kkk')}>click</button>
    </div>
  )
}

export default App