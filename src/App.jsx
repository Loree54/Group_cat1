import React, { useState } from 'react'
import { convertNumber } from './logic/converter'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [fromBase, setFromBase] = useState('decimal')
  const [toBase, setToBase] = useState('binary')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    try {
      const output = convertNumber(inputValue, fromBase, toBase)
      setResult(output)
    } catch (error) {
      setResult('Error: Invalid input')
    }
  }

  return (
    <div className="container">
      <h2>Number System Converter</h2>

      <input
        type="text"
        placeholder="Enter number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <select value={fromBase} onChange={(e) => setFromBase(e.target.value)}>
        <option value="decimal">Decimal</option>
        <option value="binary">Binary</option>
        <option value="octal">Octal</option>
        <option value="hexadecimal">Hexadecimal</option>
      </select>

      <select value={toBase} onChange={(e) => setToBase(e.target.value)}>
        <option value="decimal">Decimal</option>
        <option value="binary">Binary</option>
        <option value="octal">Octal</option>
        <option value="hexadecimal">Hexadecimal</option>
      </select>

      <button onClick={handleConvert}>Convert</button>

      {result && (
        <p>
          Result: <strong>{result}</strong>
        </p>
      )}
    </div>
  )
}

export default App
