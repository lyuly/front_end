import React from "react"
import './App.css'
import { Input, Table } from 'antd'

const { Search } = Input

class App extends React.Component {

  state = {
    data: [],
    columns: [
      {
        title: '名字',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      }
    ]
  }

  searchFn = () => (
    <Search
      placeholder="请输入文本"
      allowClear
      enterButton="搜索"
      style={{
        width: 200
      }}
      onSearch={this.onSearch}
    />
  )

  onSearch = async() => {
    const res = await fetch('http://107.173.86.3/info')
    let data = await res.json()
    data = data.filter(item => item.name)
    data = data.map((item) => {
      item.key = item.id
      delete item.id
      return item
    })
    this.setState({
      data: data
    })
  }

  TableShow = () => <Table columns={this.state.columns} dataSource={this.state.data} />

  componentDidMount() {
    this.onSearch()
  }

  render() {
    return (
      <div>
        <this.searchFn/>
        <this.TableShow/>
      </div>
    )
  }
}

export default App