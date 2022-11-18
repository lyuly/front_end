import { makeAutoObservable } from "mobx"

class taskStore {

  list = []

  constructor() {
    makeAutoObservable(this)
  }

  // 计算属性
  get isAll() {
    return this.list.every(item => item.isDone)
  }

  get isFinished() {
    return this.list.filter(item => item.isDone).length
  }

  add(data) {
    this.list.push(data)
  }

  delete(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  singleCheck(id) {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
  }

  allCheck(checked) {
    this.list.forEach(item => {
      item.isDone = checked
    })
  }
}

export { taskStore }