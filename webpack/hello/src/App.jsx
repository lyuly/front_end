import React, { useRef, useState } from 'react'
import './App.scss'

function App() {

  const [count, setCount] = useState(0)
  const myRef = useRef(null);

  const getDom = () => {
    console.log(myRef);
  }

  return (
    <div ref={myRef}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>主要按钮</button>
      <button onClick={() => getDom()}>获取dom</button>
    </div>
  )
}

export default App