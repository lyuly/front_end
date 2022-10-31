// 条件渲染
// 技术方案：三元表达式（常用）

// 1.三元表达式 -- 满足条件才渲染一个span标签
// 2. &&

const flag = true

function App() {
  return (
    <div className="App">
      { flag ? <p>好</p> : null }
    </div>
  )
}

export default App
