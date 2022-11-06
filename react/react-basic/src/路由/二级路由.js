import Layout from './Layout'
import Login from './Login'
import Board from './Board'
import Article from './Article'
import NotFound from './404'

import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"></Link>
        <Link to="/login"></Link>

        <Routes>
          <Route path='/' element={<Layout/>}>
            {/* 二级路由 index 过滤自己的path*/}
            <Route path='/board' element={<Board/>}></Route>
            <Route path='/article' element={<Article/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App