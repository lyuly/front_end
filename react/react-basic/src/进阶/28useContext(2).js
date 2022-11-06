import { createContext, useContext, useState } from "react"

/* 
Context写到index.js只执行一次

Context写到app.js，改变数据也会变
*/

const Context = createContext()

function TestA() {
  const count = useContext(Context)
  return (
    <div>
      <p>this is TestA</p>
      App传来的值是{count}
      <TestB/>
    </div>
  )
}

function TestB() {
  const count = useContext(Context)
  return (
    <div>
      <p>this is TestB</p>
      <p>接收的值是{count}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
      <div>
        <TestA/>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    </Context.Provider>
  )
}

export default App