# Number System Converter - Program Documentaton 
<h1 align="center">Program Documentation</h1>

<h2>1. Overview</h2>
<p>
A web-based application that automates conversions between number systems: 
<b>Decimal, Binary, Octal, and Hexadecimal</b>.  
Developed and submitted by <b>GROUP W</b> as part of an academic assignment.  
The system features a clean UI, accurate conversion algorithms, and optional batch-of-five processing.
</p>

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
      <li><code>src/logic/converter.js</code> → Conversion functions and error handling</li>
    </ul>
  </li>
  <li><b>Deployment:</b> Static site hosted on <b>Vercel</b> or <b>Netlify</b></li>
</ul>

<h2>3. Conversion Algorithm</h2>
<ol>
  <li><b>Input Validation</b>
    <ul>
      <li>Check that input is not empty</li>
      <li>Ensure input characters are valid for the selected base</li>
    </ul>
  </li>
  <li><b>Parse Input</b>
    <ul>
      <li>Convert the input string (integer and fractional parts) to decimal</li>
    </ul>
  </li>
  <li><b>Convert to Target Base</b>
    <ul>
      <li>Integer part → <code>num.toString(base)</code></li>
      <li>Fractional part → multiply by base repeatedly and extract digits</li>
      <li>Combine results into final converted number</li>
    </ul>
  </li>
  <li><b>Error Handling</b>
    <ul>
      <li>Invalid inputs return clear error messages</li>
    </ul>
  </li>
</ol>

<h2>4. Batch-of-Five Processing (Optional / Future)</h2>
<ul>
  <li>Accept a list of numbers</li>
  <li>Split the list into groups of 5</li>
  <li>Convert each value and display results per group</li>
</ul>

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
├── PROCESS.md               # Process documentation (team roles, workflow)
└── PROGRAM.md               # Program documentation (architecture, algorithm)
</pre>

<h2>6. Team Roles & Workflow</h2>
<ul>
  <li><b>Blair Peter Wachira</b> — Project Lead, repository management</li>
  <li><b>Gitari Dennis Mutwiri</b> — UI design and integration</li>
  <li><b>Lawrence Kibet</b> — Conversion logic and batch processing</li>
  <li><b>Philip Aticha</b> — Testing and validation</li>
  <li><b>Cynthia Wanjiru Gitau</b> — Documentation and deployment</li>
</ul>
<p>
All group members participated actively through coding, testing, reviewing, and documentation.  
Tasks were shared fairly to ensure teamwork and equal contribution.
</p>

<h2>7. Testing</h2>
<ul>
  <li>Manual testing via UI:
    <ul>
      <li>Decimal ↔ Binary</li>
      <li>Decimal ↔ Octal</li>
      <li>Decimal ↔ Hexadecimal</li>
      <li>Invalid input handling</li>
    </ul>
  </li>
  <li>Optional automated tests for <code>converter.js</code></li>
</ul>

<h2>8. Deployment Instructions</h2>
<ol>
  <li>Push code to GitHub:
    <pre><code>git add .  
git commit -m "final update"  
git push origin main</code></pre>
  </li>
  <li>Connect GitHub repository to Netlify or Vercel</li>
  <li>Deploy and test live project</li>
</ol>

<h2>9. Conclusion</h2>
<p>
The program successfully automates number system conversions across different bases, 
handles fractional values, and supports batch processing.  
It also demonstrates effective teamwork, collaboration, and application of digital logic concepts.  
<b>Every member of GROUP W contributed fairly, ensuring the success of this project.</b>
</p>
