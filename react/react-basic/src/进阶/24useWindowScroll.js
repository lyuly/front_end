import { useWindowScroll } from "../hooks/useWindowScroll"

function App() {
  const [y] = useWindowScroll()

  return (
    <div style={{height: '1200px'}}>
      {y}
    </div>
  )
}

export default App