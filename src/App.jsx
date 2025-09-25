import { useState } from "react";
import { parseInput, convertToBase, batchConvert } from "./logic/converter";

// Map subscript characters to base numbers
const subMap = { "₂":2, "₈":8, "₁₀":10, "₁₆":16 };

function parseWithSubscript(input) {
  const match = input.match(/^([0-9A-Fa-f.]+)([₂₃₄₅₆₇₈₉₁₀₁₁₁₂₁₃₁₄₁₅₁₆₁₇₁₈₁₉]*)$/);
  if (!match) throw new Error("Invalid input");
  const numStr = match[1];
  const subscript = match[2];
  const base = subMap[subscript] || null; // null means use dropdown if blank
  return { numStr, base };
}

// Convert a single value with optional subscript
function convertValue(value, defaultBase, toBase) {
  const { numStr, base } = parseWithSubscript(value);
  const fromBase = base || defaultBase;
  const decimal = parseInput(numStr, fromBase);
  const converted = convertToBase(decimal, toBase);
  return `${converted}_${toBase}`; // append subscript
}

function App() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [result, setResult] = useState([]);

  const baseOptions = [
    { name: "Binary", value: 2 },
    { name: "Octal", value: 8 },
    { name: "Decimal", value: 10 },
    { name: "Hexadecimal", value: 16 }
  ];

  const handleConvert = () => {
    const values = input.split(/[\s,]+/).filter(v => v.length > 0);
    const batch = values.map(v => {
      try {
        return { input: v, output: convertValue(v, parseInt(fromBase), parseInt(toBase)), error: null };
      } catch (e) {
        return { input: v, output: null, error: e.message };
      }
    });
    setResult(batch);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "sans-serif", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", color: "#1e3d59" }}>🌈 Number System Converter</h2>

      <input
        type="text"
        placeholder="Enter numbers separated by space or comma"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", padding: "0.8rem", marginBottom: "1rem", borderRadius: "8px", border: "1px solid #ccc" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div>
          <label>From Base:</label>
          <select
            value={fromBase}
            onChange={e => setFromBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "6px", backgroundColor: "#d0e6f6" }}
          >
            {baseOptions.map(b => <option key={b.value} value={b.value}>{b.name}</option>)}
          </select>
        </div>

        <div>
          <label>To Base:</label>
          <select
            value={toBase}
            onChange={e => setToBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "6px", backgroundColor: "#fcd5ce" }}
          >
            {baseOptions.map(b => <option key={b.value} value={b.value}>{b.name}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        style={{ width: "100%", padding: "1rem", backgroundColor: "#ff6f61", color: "white", fontSize: "1.1rem", border: "none", borderRadius: "8px", cursor: "pointer", marginBottom: "2rem" }}
      >
        Convert 🔄
      </button>

      {result.length > 0 && (
        <div>
          {result.map((item, i) => (
            <div key={i} style={{ marginBottom: "0.8rem", padding: "0.8rem", borderRadius: "8px", backgroundColor: "#e8f1f2" }}>
              {item.error ? <span style={{ color: "red" }}>{item.input} → {item.error}</span>
                         : <span style={{ fontWeight: "bold" }}>{item.input} → {item.output}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
