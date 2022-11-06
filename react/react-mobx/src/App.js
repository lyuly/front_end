// 1. 导入store
import { useStore } from './store/index'

// 2. 导入中间件连接mobx react 完成响应式
import { observer } from "mobx-react-lite"

function App() {
  const { CounterStore, ListStore } = useStore()
  return (
    <div className="App">
      <p>{CounterStore.count}</p>
      <button onClick={() => CounterStore.addCount()}>+</button>
      <p>{ListStore.list.join(' ')}</p>
      <button onClick={() => ListStore.addList()}>click</button>
    </div>
  )
}

// 3. 包裹App
export default observer(App)