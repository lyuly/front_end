import { useState } from "react"

/* 
useState
state setState
状态 更新状态的函数 初始值
*/

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('pig')
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
      <p>{name}</p>
      <button onClick={() => setName('mike')}>change</button>
    </div>
  )
}

export default App