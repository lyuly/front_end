/* 
原则：模版中的逻辑尽量保持精简
复杂的多分支的逻辑 收敛为一个函数 通过一个专门的函数来写分支逻辑，模版中只负责调用
*/

const getHType = (type) => {
  if (type === 1) {
    return <h1>h1</h1>
  }

  if (type === 2) {
    return <h2>h2</h2>
  }

  if (type === 3) 
  return <h3>h3</h3>
}

function App() {
  return (
    <div className="App">
      {getHType(1)}
      {getHType(2)}
      {getHType(3)}
    </div>
  )
}

export default App