import { ChangeEvent, useState } from 'react';

import './App.css'

function App() {
  const [size, setSize] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(Number((e.target as HTMLInputElement).value))
  }

  return (
    <>
      <h1>How border radius works</h1>
      <div className="box" style={{ borderRadius: `${size}%` }}/>
      <p>{size}%</p>
      <input type="range" id="percentage" name="percentage" min="0" max="100" value={size} onChange={handleChange} />
    </>
  )
}

export default App
