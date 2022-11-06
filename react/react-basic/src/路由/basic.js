import Home from "../components/Home"
import About from "../components/About"
import Login from "../components/Login"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

// 路由配置
function App() {
  return (
    // 非hash模式路由
    <BrowserRouter>
    {/* 指定跳转的组件 to用来配置路由地址 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      {/* 路由出口 路由对应的组件会在这里进行渲染 */}
      <Routes>
        {/* 指定路径和组件的对应关系path代表路径 element代表组件 成对出现 */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about/:id" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App