import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "@/pages/Layout"
import Login from '@/pages/Login'

const mock = true
if (mock) {
  require('@/mock/api')
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App