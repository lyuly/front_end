import { createContext, useContext, useState } from "react"

const Context = createContext()

function ComA() {
  const count = useContext(Context)
  return (
    <div>
      <p>this A component</p>
      <p>App传入的值为{count}</p>
      <ComB/>
    </div>
  )
}

function ComB() {
  const count = useContext(Context)
  return (
    <div>
      this B component
      <br/>
      app传过来的数据为:{count}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(20)
  return (
    <div>
      <Context.Provider value={count}>
        <div>
          <ComA/>
          <br/>
          <button onClick={() => setCount(count + 1)}>click</button>
          <br/>
        </div>
      </Context.Provider>
    </div>
  )
}

export default App