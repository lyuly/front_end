import { makeAutoObservable } from "mobx"
import { http, setToken, getToken, removeToken } from "@/utils"
import { message } from 'antd'

class LoginStore{

  token = getToken() || null

  constructor() {
    makeAutoObservable(this)
  }

  getToken = async(form) => {
    // const res = await http.post('/login', form)
    const res = await http.post('/authorizations', form)
    this.token = res.data.token
    setToken(this.token)
    message.success('登录成功')
  }

  loginOut = () => {
    this.token = ''
    removeToken()
    message.success('退出成功')
  }
}

export default LoginStore