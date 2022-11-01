import React, { createRef } from "react"

class Input extends React.Component {
  msgRef = createRef()

  getValue = () => {
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef}
        />
        <button onClick={this.getValue}>点击获取值</button>
      </>
    )
  }
}

function App() {
  return (
    <div>
      <Input/>
    </div>
  )
}

export default App