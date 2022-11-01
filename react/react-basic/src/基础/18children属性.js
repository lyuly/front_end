import React from "react"

// 渲染列表
function ListItem({children}) {
  // children()
  return (
    <div>
      ListItem{children}
    </div>
  )
}

class App extends React.Component {
  render () {
    return (
      <div>
        <ListItem>
          {/* <p>this is child</p> */}
          {/* {() => console.log('hi😁')} */}
          {<div>Hello</div>}
        </ListItem>
      </div>
    )
  }
}

export default App