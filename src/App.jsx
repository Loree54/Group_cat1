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

  const baseOptions = [
    { name: "Binary", value: 2 },
    { name: "Octal", value: 8 },
    { name: "Decimal", value: 10 },
    { name: "Hexadecimal", value: 16 }
  ];

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Number System Converter</h2>

      <input
        type="text"
        placeholder="Enter numbers separated by space or comma"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: "100%", padding: "0.7rem", marginBottom: "1rem", borderRadius: "6px", border: "1px solid #ccc" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div>
          <label>From:</label>
          <select
            value={fromBase}
            onChange={e => setFromBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "5px" }}
          >
            {baseOptions.map(b => <option key={b.value} value={b.value}>{b.name}</option>)}
          </select>
        </div>

        <div>
          <label>To:</label>
          <select
            value={toBase}
            onChange={e => setToBase(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.5rem", borderRadius: "5px" }}
          >
            {baseOptions.map(b => <option key={b.value} value={b.value}>{b.name}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        style={{ width: "100%", padding: "0.8rem", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
      >
        Convert
      </button>

      {result.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          {result.map((group, i) => (
            <div key={i} style={{ marginBottom: "1rem", padding: "0.8rem", borderRadius: "6px", backgroundColor: "#f9f9f9" }}>
              <strong>Group {i + 1}</strong>
              <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                {group.map((item, j) => (
                  <li key={j}>
                    {item.error ? <span style={{ color: "red" }}>{item.input} → {item.error}</span>
                                : <span>{item.input} → {item.output}</span>}
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
