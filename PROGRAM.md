# Number System Converter - Program Documentaton 
<h1 align="center">📘 PROGRAM DOCUMENTATION</h1>

<h2>1. Overview</h2>
<p>
A web-based application that automates conversions between number systems: 
<strong>Decimal</strong>, <strong>Binary</strong>, <strong>Octal</strong>, and <strong>Hexadecimal</strong>. 
This project was developed by <b>GROUP W</b> as part of an assignment submission. 
The app features a clean, interactive UI, accurate conversion logic, and supports batch-of-five processing.
</p>

<hr/>

<h2>2. Project Architecture</h2>
<ul>
  <li><b>Frontend:</b> React + Vite  
    <ul>
      <li><code>App.jsx</code> → Main UI component</li>
      <li><code>main.jsx</code> → React entry point</li>
      <li><code>index.css</code> → Styling</li>
    </ul>
  </li>
  <li><b>Logic:</b> Node.js / JavaScript  
    <ul>
      <li><code>src/logic/converter.js</code> → Conversion functions, error handling</li>
    </ul>
  </li>
  <li><b>Deployment:</b> Static site hosted on <b>Vercel</b> or <b>Netlify</b></li>
</ul>

<hr/>

<h2>3. Conversion Algorithm</h2>
<ol>
  <li><b>Input Validation</b> – Ensure input is not empty and contains valid characters for the selected base.</li>
  <li><b>Parse Input</b> – Convert input string to decimal using custom parsing logic.</li>
  <li><b>Convert to Target Base</b> – Convert decimal to desired base using <code>toString(toBase)</code>.</li>
  <li><b>Error Handling</b> – Return clear messages if input is invalid.</li>
</ol>

<hr/>

<h2>4. Features</h2>
<ul>
  <li>✅ Convert between Decimal, Binary, Octal, and Hexadecimal.</li>
  <li>✅ Handles fractional numbers (e.g., <code>101.101₂ → 5.625₁₀</code>).</li>
  <li>✅ Batch-of-five conversion (optional).</li>
  <li>✅ Clean and responsive UI.</li>
  <li>✅ Cross-platform deployment on Android/iOS browsers.</li>
</ul>

<hr/>

<h2>5. File Structure</h2>
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
├── PROCESS.md               # Process documentation (workflow, roles)
└── PROGRAM.md               # Program documentation (architecture, algorithm)
</pre>

<hr/>

<h2>6. Team Roles & Workflow</h2>
<ul>
  <li><b>Project Lead:</b> Loree – Coordination & repository management.</li>
  <li><b>Developer 1:</b> UI design & integration.</li>
  <li><b>Developer 2:</b> Conversion logic & batch processing.</li>
  <li><b>Tester:</b> Manual & automated testing.</li>
  <li><b>Documentation / DevOps:</b> Docs & deployment.</li>
</ul>
<p>
The group worked together collaboratively through the workflow:  
<b>Planning → Development → Testing → Documentation → Deployment</b>.
</p>

<hr/>

<h2>7. Testing</h2>
<ul>
  <li>✔ Decimal ↔ Binary</li>
  <li>✔ Decimal ↔ Octal</li>
  <li>✔ Decimal ↔ Hexadecimal</li>
  <li>✔ Fractional conversions</li>
  <li>✔ Invalid input handling</li>
</ul>

<hr/>

<h2>8. Deployment Instructions</h2>
<ol>
  <li>Push code to GitHub:</li>
</ol>

<pre>
git push origin main
</pre>

<ol start="2">
  <li>Deploy via Netlify or Vercel:
    <ul>
      <li>Connect GitHub repository</li>
      <li>Build command: <code>npm run build</code></li>
      <li>Publish directory: <code>dist/</code></li>
    </ul>
  </li>
</ol>

<hr/>

<h2>9. How to View the Project</h2>
<ul>
  <li><b>Live Demo:</b> Visit the deployed link on <b>Netlify</b> or <b>Vercel</b>.</li>
  <li><b>Run Locally:</b></li>
</ul>

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

<p>Then open <code>http://localhost:5173/</code> in your browser.</p>

<hr/>

<h2>10. Group Members (GROUP W)</h2>
<ul>
  <li><b>Blair Peter Wachira</b> – CT100/G/21430/24</li>
  <li><b>Gitari Dennis Mutwiri</b> – CT100/G/21589/24</li>
  <li><b>Lawrence Kibet</b> – CT100/G/21767/24</li>
  <li><b>Philip Aticha</b> – CT100/G/22226/24</li>
  <li><b>Cynthia Wanjiru Gitau</b> – CT100/G/20299/23</li>
</ul>

<p align="center"><i>All members contributed fairly to the success of this project.</i></p>
