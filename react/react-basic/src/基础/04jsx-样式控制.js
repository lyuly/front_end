/* 
  样式控制
  1. 行内样式 - 在元素身上绑定一个style属性即可
  2. 类名样式 - 在元素身上绑定一个className属性
*/

import './app.sass'

const style = {
  color: 'red',
  fontSize: '30px'
}


function App() {
  return (
    <div className="App">
      <span style={style}>hello react</span>
      <span className="active">测试类名</span>
    </div>
  )
}

export default App