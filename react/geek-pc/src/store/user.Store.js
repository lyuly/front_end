import { http } from '@/utils'
import { runInAction, makeAutoObservable } from 'mobx'

class UserStore {
  userInfo = {}

  constructor() {
    makeAutoObservable(this)
  }

  getUserInfo = async() => {
    const res = await http.get('/user/profile')
    runInAction(() => {
      this.userInfo = res.data
    })
  }
}

export default UserStore