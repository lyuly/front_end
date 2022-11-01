// react列表渲染
// map重复渲染的是哪个模版，就return谁
// 注意事项：遍历列表时同样需要一个类型为number/string不可重复的key提高diff性能
// key 仅仅在内部使用，不会出现在真实的dom中
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div>
      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>) }
      </ul>
    </div>
  )
}

export default App
