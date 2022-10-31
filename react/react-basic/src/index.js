// React: 框架的核心包
//  ReactDOM: 专门做渲染相关的包

import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用全局样式文件
import './index.sass'
// 引入根组件
import App from './App'

// 渲染根组件到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格节点模式去掉
  // useEffect的执行时机
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)