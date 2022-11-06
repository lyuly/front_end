import React, { useEffect, useRef } from "react"

class Test extends React.Component {
  render() {
    return (
      <div>我是类组件</div>
    )
  }
}

function App() {
  const testRef = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
  })

  return (
    <div>
      <Test ref={testRef}/>
    </div>
  )
}

export default App