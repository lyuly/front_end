import { makeAutoObservable } from "mobx"
import { http, setToken, getToken } from "@/utils"
import '@/mock/api'
import { message } from 'antd'

class LoginStore{

  token = getToken() || null

  constructor() {
    makeAutoObservable(this)
  }

  getToken = async(form) => {
    const res = await http.post('login', form)
    if (res.code === 200) {
      this.token = res.token
      setToken(this.token)
      message.success(res.message)
    } else {
      message.error(res.message)
    }
  }
}


export default LoginStore