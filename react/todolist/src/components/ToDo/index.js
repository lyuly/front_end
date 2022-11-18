import { observer } from "mobx-react-lite"
import "./index.css"
import { useStore } from '../../store/index'
import uuid from 'react-uuid'
import { useState } from 'react'

function ToDo() {
  const { taskStore } = useStore()

  const [taskValue, setTaskValue] = useState('')

  function addTask(e) {
    if (e.keyCode === 13) {
      taskStore.add(
        {
          id: uuid(),
          name: taskValue,
          isDone: false
        }
      )
      setTaskValue('')
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          value={taskValue}
          onChange={e => setTaskValue(e.target.value)}
          onKeyUp={addTask}
          placeholder="接下来要做什么？"
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={taskStore.isAll}
          onChange={(e) => taskStore.allCheck(e.target.checked)}
        />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            taskStore.list.map(item => (
              <li className={item.isDone ? 'todo completed' : 'todo'} key={item.id}>
                <div className="view">
                  <input 
                    className="toggle"
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => taskStore.singleCheck(item.id)}
                  />
                  <label>{item.name}</label>
                  <button className="destroy" onClick={() => taskStore.delete(item.id)}></button>
                </div>
              </li>    
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          任务总数：{taskStore.list.length} 已完成：{taskStore.isFinished}
        </span>
      </footer>
    </section>
  )
}

export default observer(ToDo)