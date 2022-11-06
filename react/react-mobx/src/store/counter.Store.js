import { makeAutoObservable } from "mobx"

class CounterStore {
  // 1. 定义数据
  count = 0
  
  constructor() {
    // 2. 把数据转为响应式
    makeAutoObservable(this)
  }

  // 3. 定义action函数
  addCount = () => {
    this.count++
  }

}

export { CounterStore }