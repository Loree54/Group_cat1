# Number System Converter - Program Documentaton 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PROGRAM.md - Number System Converter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 12px;
      border-radius: 8px;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: Consolas, monospace;
    }
    ul {
      margin-left: 20px;
    }
    .team {
      background: #ecf0f1;
      padding: 10px;
      border-left: 5px solid #3498db;
      border-radius: 5px;
    }
    .highlight {
      color: #16a085;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>Number System Converter – Program Documentation</h1>
  <p><strong>Group W</strong> – A collaborative project where all members contributed equally, ensuring fair participation and teamwork.</p>

  <h2>1. Overview</h2>
  <p>
    A web-based application that automates conversions between number systems:
    decimal, binary, octal, and hexadecimal. Developed as a <span class="highlight">GROUP W</span> assignment submission.
    The system provides a clean user interface, accurate logic, and potential for batch-of-five processing.
  </p>

  <h2>2. Project Architecture</h2>
  <ul>
    <li><strong>Frontend:</strong> React + Vite
      <ul>
        <li><code>App.jsx</code> – Main UI component</li>
        <li><code>main.jsx</code> – React entry point</li>
        <li><code>index.css</code> – Styling</li>
      </ul>
    </li>
    <li><strong>Logic:</strong> Node.js / JavaScript
      <ul>
        <li><code>src/logic/converter.js</code> – Conversion functions, error handling</li>
      </ul>
    </li>
    <li><strong>Deployment:</strong> Static site hosted on <strong>Vercel</strong> or <strong>Netlify</strong></li>
  </ul>

  <h2>3. Conversion Algorithm</h2>
  <ol>
    <li><strong>Input Validation</strong> – Ensure input is not empty and characters are valid for the selected base.</li>
    <li><strong>Parse Input</strong> – Convert input string to decimal using <code>parseInt(value, fromBase)</code>.</li>
    <li><strong>Convert to Target Base</strong> – Transform decimal into target base using <code>toString(toBase)</code>, ensuring uppercase output.</li>
    <li><strong>Error Handling</strong> – Display clear error messages for invalid input.</li>
  </ol>

  <h2>4. Features</h2>
  <ul>
    <li>Instant conversion between decimal, binary, octal, and hexadecimal.</li>
    <li>Clear and responsive UI with real-time updates.</li>
    <li>Batch-of-five conversion mode (planned).</li>
    <li>Copy-to-clipboard functionality for results.</li>
    <li>Error highlighting for invalid inputs.</li>
    <li>Light/Dark theme toggle for accessibility.</li>
  </ul>

  <h2>5. Batch-of-Five Processing (Future Extension)</h2>
  <ul>
    <li>Accepts a list of numbers.</li>
    <li>Splits into groups of five.</li>
    <li>Processes each group independently and displays results.</li>
  </ul>

  <h2>6. File Structure</h2>
  <pre>
number-system-converter/
│
├── src/
│   ├── logic/converter.js   # Conversion logic
│   ├── App.jsx              # Main UI component
│   ├── main.jsx             # React entry point
│   └── index.css            # Styling
├── index.html               # Root HTML file
├── package.json             # Project metadata & scripts
├── vite.config.js           # Vite configuration
├── README.md                # Project overview + setup instructions
├── PROCESS.md               # Process documentation (team roles, workflow)
└── PROGRAM.md               # Program documentation (architecture, algorithm)
  </pre>

  <h2>7. Team Roles & Workflow</h2>
  <div class="team">
    <p><strong>Project Lead:</strong> Loree – coordination, repository management</p>
    <p><strong>Developer 1:</strong> UI design and integration</p>
    <p><strong>Developer 2:</strong> Conversion logic & batch processing</p>
    <p><strong>Tester:</strong> Manual & automated testing</p>
    <p><strong>Documentation/DevOps:</strong> Docs and deployment setup</p>
    <p><em>Workflow:</em> Planning → Development → Testing → Documentation → Deployment</p>
  </div>

  <h2>8. Testing</h2>
  <ul>
    <li>Manual testing of all conversions:
      <ul>
        <li>Decimal ↔ Binary</li>
        <li>Decimal ↔ Octal</li>
        <li>Decimal ↔ Hexadecimal</li>
        <li>Error handling with invalid inputs</li>
      </ul>
    </li>
    <li>Optional: Automated tests for conversion logic using JavaScript test frameworks.</li>
  </ul>

  <h2>9. How to View / Run the Project</h2>
  <h3>Live Demo</h3>
  <p>Visit the deployed project link on <strong>Vercel</strong> or <strong>Netlify</strong> (to be shared by Group W).</p>

  <h3>Run Locally</h3>
  <pre>
# Clone the repository
git clone https://github.com/username/number-system-converter.git

# Navigate into project folder
cd number-system-converter

# Install dependencies
npm install

# Start development server
npm run dev
  </pre>
  <p>Open <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> in your browser to view the project.</p>

</body>
</html>
