import { useState } from "react";
import { batchConvert } from "./logic/converter";

function App() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [result, setResult] = useState([]);

  const handleConvert = () => {
    const values = input.split(/[\s,]+/).filter(v => v.length > 0);
    setResult(batchConvert(values, parseInt(fromBase), parseInt(toBase)));
  };

  const baseOptions = Array.from({ length: 36 }, (_, i) => i + 2); // Base 2 to 36

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>✨ Number System Converter ✨</h2>

      <input
        type="text"
        placeholder="Enter numbers separated by space or comma"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "0.8rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "1rem"
        }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div>
          <label>From Base:</label>
          <select
            value={fromBase}
            onChange={e => setFromBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "6px" }}
          >
            {baseOptions.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label>To Base:</label>
          <select
            value={toBase}
            onChange={e => setToBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "6px" }}
          >
            {baseOptions.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        style={{
          width: "100%",
          padding: "1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          fontSize: "1.1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "2rem"
        }}
      >
        Convert 🔄
      </button>

      {result.length > 0 && (
        <div>
          {result.map((group, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#f0f0f0"
              }}
            >
              <strong>Group {i + 1}</strong>
              <ul style={{ listStyle: "none", paddingLeft: "0.5rem", marginTop: "0.5rem" }}>
                {group.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem", fontSize: "1.05rem" }}>
                    {item.error ? (
                      <span style={{ color: "red" }}>{item.input} → {item.error}</span>
                    ) : (
                      <span>{item.input} → {item.output}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
