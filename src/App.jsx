import { useState } from "react";
import { batchConvert } from "./logic/converter";

function App() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);
  const [precision, setPrecision] = useState(10);
  const [result, setResult] = useState([]);

  const handleConvert = () => {
    const values = input
      .split(/[\s,]+/)
      .filter(v => v.length > 0);
    setResult(batchConvert(values, parseInt(fromBase), parseInt(toBase), parseInt(precision)));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Number System Converter</h2>

      <textarea
        rows="5"
        placeholder="Enter numbers separated by space or comma"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%" }}
      />

      <div style={{ margin: "1rem 0" }}>
        <label>From Base:</label>
        <input
          type="number"
          min="2"
          max="36"
          value={fromBase}
          onChange={e => setFromBase(e.target.value)}
          style={{ marginLeft: "0.5rem", width: "4rem" }}
        />

        <label style={{ marginLeft: "1rem" }}>To Base:</label>
        <input
          type="number"
          min="2"
          max="36"
          value={toBase}
          onChange={e => setToBase(e.target.value)}
          style={{ marginLeft: "0.5rem", width: "4rem" }}
        />

        <label style={{ marginLeft: "1rem" }}>Precision:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={precision}
          onChange={e => setPrecision(e.target.value)}
          style={{ marginLeft: "0.5rem", width: "4rem" }}
        />
      </div>

      <button onClick={handleConvert} style={{ padding: "0.5rem 1rem" }}>Convert</button>

      {result.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          {result.map((group, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#f9f9f9"
              }}
            >
              <h4>Group {i + 1}</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {group.map((item, j) => (
                  <li key={j} style={{ marginBottom: "0.5rem" }}>
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
