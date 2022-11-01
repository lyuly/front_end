import React from "react"

class TestComponent extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'pig',
      age: 18,
      sex: 2
    }
  }

  clickHandler = () => {
    // 数组修改
    // this.setState({
    //   list: [...this.state.list, 4]
    // })

    // 对象修改
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //     name: 'fan'
    //   }
    // })

    // 数值修改
    // this.setState({
    //   count: this.state.count + 1
    // })

    this.setState({
      list: this.state.list.filter(item => item !== 2)
    })
  }

  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <div>{this.state.count}</div>
        <div>
          <button onClick={this.clickHandler}>click</button>
        </div>
      </>
    )
  }
}

function App() {
  return (
    <div>
      <TestComponent/>
    </div>
  )
}

export default App