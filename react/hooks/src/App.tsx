import useToggle from "./hooks/useToggle"
import { useState } from "react"


function App() {
  const [isTextChanged, setIsTextChanged] = useToggle()
  const [num, setNum] = useState<number>(0)

  return (
    <div>
      <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'click to Toggle'}</button>
      <br />
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>click</button>
    </div>
  )
}

export default App