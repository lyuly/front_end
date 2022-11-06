//1. 导入useNavigate
import { useNavigate } from "react-router-dom"

function Login () {
  //2.执行useNavigate得到跳转函数
  const navigate = useNavigate()
  // 跳转到关于页
  function goAbout() {
    // 3.传入目标路径，replace: true是清除历史记录，默认不加
    // navigate("/about?id=1001", { replace: false })
    navigate("/about/1001")
  }
  return (
    <div>
      Login
      <button onClick={goAbout}>跳转关于</button>
    </div>
  )
}

export default Login