import React from 'react';
import { taskStore } from './modules/task.Store'

class RootStore {
  constructor() {
    this.taskStore = new taskStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }