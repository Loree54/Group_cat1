import React, { useState } from "react";
import convertNumber from "./logic/converter";

export default function App() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const [toBase, setToBase] = useState("10");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const base = fromBase === "" ? undefined : parseInt(fromBase, 10);
      const output = convertNumber(input, base, parseInt(toBase, 10));
      setResult(output);
    } catch (error) {
      setResult("⚠️ Invalid input");
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">🔢 Number System Converter</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Enter number e.g. 101.101"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-box"
        />

        <div className="selectors">
          <div className="base-selector">
            <label>From Base:</label>
            <select
              value={fromBase}
              onChange={(e) => setFromBase(e.target.value)}
              className="dropdown"
            >
              <option value="2">Binary (Base 2)</option>
              <option value="8">Octal (Base 8)</option>
              <option value="10">Decimal (Base 10)</option>
              <option value="16">Hexadecimal (Base 16)</option>
            </select>
          </div>

          <div className="base-selector">
            <label>To Base:</label>
            <select
              value={toBase}
              onChange={(e) => setToBase(e.target.value)}
              className="dropdown"
            >
              <option value="2">Binary (Base 2)</option>
              <option value="8">Octal (Base 8)</option>
              <option value="10">Decimal (Base 10)</option>
              <option value="16">Hexadecimal (Base 16)</option>
            </select>
          </div>
        </div>

        <button className="convert-btn" onClick={handleConvert}>
          Convert
        </button>

        {result && (
          <div className="output-box">
            <h3>Result:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
