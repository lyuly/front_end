import React from "react"

// 渲染列表
function ListItem({item, deleteItem}) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => deleteItem(item.id)}>删除</button>
    </div>
  )
}

class App extends React.Component {

  state = {
    list: [
      { id: 1, name: '棒棒糖', price: 18.8, info: '开业大酬宾9折' },
      { id: 2, name: '大鸡腿', price: 28.8, info: '开业大酬宾8折' },
      { id: 3, name: '冰淇淋', price: 38.8, info: '开业大酬宾7折' },
    ]
  }

  deleteItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }

  render () {
    return (
      <div>
        {this.state.list.map(item => <ListItem item={item} key={item.id} deleteItem={this.deleteItem}/>)}
      </div>
    )
  }
}

export default App