import React from "react";

function Son({count, getMsg, content, toSonMsg}) {

  function clickHandler() {
    toSonMsg('来自子组件')
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={getMsg}>触发传递</button>
      {content}
      {/* <button onClick={() => toSonMsg('来自子组件')}>传给父组件</button> */}
      <button onClick={clickHandler}>传给父组件</button>
      <p></p>
    </div>
  )
}

class App extends React.Component {
  state = {
    count: 1,
    list: [1, 2, 3],
    content: <span>hello</span>
  }

  getMsg = () => {
    console.log('父组件传递消息')
  }

  toSonMsg = (sonMsg) => {
    console.log(sonMsg)
  }

  render () {
   return (
    <div>
      <Son
        count={this.state.count}
        list={this.state.list}
        getMsg={this.getMsg}
        content={this.state.content}
        toSonMsg={this.toSonMsg}
      />
    </div>
   )
  }
}

export default App