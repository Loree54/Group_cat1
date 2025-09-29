import React, { useState } from "react";
import convertNumber from "./logic/converter";
import "./index.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const converted = convertNumber(inputValue, fromBase, toBase || 10);
      setResult(converted);
    } catch (e) {
      setResult("Invalid input or base!");
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Number System Converter</h1>

      <div className="card">
        {/* Input Number */}
        <label className="label">Enter Number:</label>
        <input
          className="input-box"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g. 101.101"
        />

        {/* From Base Dropdown (updated) */}
        <label className="label">From Base:</label>
        <select
          className="dropdown"
          value={fromBase}
          onChange={(e) => setFromBase(Number(e.target.value))}
        >
          <option value="2">Binary (Base 2)</option>
          <option value="8">Octal (Base 8)</option>
          <option value="10">Decimal (Base 10)</option>
          <option value="16">Hexadecimal (Base 16)</option>
        </select>

        {/* To Base Input (unchanged) */}
        <label className="label">To Base:</label>
        <input
          className="input-box"
          type="number"
          value={toBase}
          onChange={(e) => setToBase(Number(e.target.value))}
          placeholder="Leave blank for Decimal (10)"
        />

        {/* Convert Button */}
        <button className="btn-primary" onClick={handleConvert}>
          Convert
        </button>

        {/* Output */}
        {result && (
          <div className="output-box">
            <strong>Result:</strong> {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
