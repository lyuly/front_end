import React from "react"
// 内置各种校验规则
import PropTypes from "prop-types"

function Test({pageSize = 10}) {
  return (
    <div>
      {pageSize}
    </div>
  )
}

Test.propTypes = {
  pageSize: PropTypes.number
}

class TestComponent extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

TestComponent.propTypes = {
  pageSize: PropTypes.number
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Test/>
      </div>
    )
  }
}

export default App