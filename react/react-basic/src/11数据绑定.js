import React from "react";

class Counter extends React.Component {

  state = {
    message: 'hello react'
  }

  inputChange = (e) => {
    console.log('change事件被触发了')
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        {/*
          input的value属性绑定react state 
          给input绑定一个change事件，为了拿到输入框中的值
        */}
        <input
          type='text'
          value={this.state.message}
          onChange={this.inputChange}
        />
      </div>
    )
  }
}

function App() {
  return (
    <Counter/>
  )
}

export default App