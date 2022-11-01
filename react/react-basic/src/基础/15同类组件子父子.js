import React from "react";


class SonA extends React.Component {

  render () {
    return (
      <div>
        <p>我是SonA</p>
        <p>{this.props.sendAMsg}</p>
      </div>
    )
  }
}

class SonB extends React.Component {

  render() {
    return (
      <div>
        <p>我是SonB</p>
        <p>
        <button onClick={() => this.props.getBMsg('这是来自b组件的数据')}>发送数据</button>
        </p>
      </div>
    )
  }
}

class App extends React.Component {

  state = {
    count: 1,
    list: [1, 2, 3],
    msg: ''
  }

  getBMsg = (msg) => {
    console.log(msg)
    this.setState({
      msg: msg
    })
  }

  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.msg}/>
        <SonB getBMsg={this.getBMsg}/>
      </div>
    )
  }
}

export default App