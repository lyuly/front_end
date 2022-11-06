// 组合子模块
// 封装统一导出的供业务使用的方法
import React from 'react'
import { ListStore } from './list.Store'
import { CounterStore } from './counter.Store'

class RootStore {
  constructor() {
    // 对子模块进行实例化
    this.CounterStore = new CounterStore()
    this.ListStore = new ListStore()
  }
}

// 实例化操作
const rootStore = new RootStore()
// 使用react context进行统一方法封装
const context = React.createContext(rootStore)
// 通过useContext拿到rootStore实例对象，然后返回
// 在业务组件中，调用useStore() -> rootStore
const useStore = () => React.useContext(context)

export { useStore }