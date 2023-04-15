import React, { useState } from 'react';
import './App.scss';
import Hello from './components/Hello';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? 'ON' : 'OFF'}
      </button>
      { toggle ? <Hello/> : null }
    </div>
  )
}

export default App;