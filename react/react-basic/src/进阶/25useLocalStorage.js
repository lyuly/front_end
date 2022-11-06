import { useLocalStorage } from "../hooks/useLocalStorage"

function App() {
  const [message, setMessage] = useLocalStorage('hooks', '杰瑞')
  setTimeout(() => {
    setMessage('波特')
  }, 5000)
  return (
    <div>
      {message}
    </div>
  )
}

export default App