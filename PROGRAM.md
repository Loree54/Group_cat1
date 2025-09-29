# Number System Converter - Program Documentaton 
  <h1 align="center">📘 PROGRAM DOCUMENTATION</h1>

<h2>1. Overview</h2>
<p>
This web-based application automates conversions between number systems: <strong>Decimal</strong>, 
<strong>Binary</strong>, <strong>Octal</strong>, and <strong>Hexadecimal</strong>.  
Developed by <strong>GROUP W</strong> as an academic assignment submission.  
The app features a clean interface, accurate conversion logic, supports fractional numbers, 
and can process numbers in batches of five.
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
  <li><b>Deployment:</b> Static site hosted on <strong>Netlify</strong> or <strong>Vercel</strong></li>
</ul>

<hr/>

<h2>3. Conversion Algorithm</h2>
<ol>
  <li><b>Input Validation:</b> Ensure input is not empty and only valid characters are used for the selected base.</li>
  <li><b>Parse Input:</b> Convert the input string to decimal, handling integer and fractional parts separately.</li>
  <li><b>Convert to Target Base:</b> Transform decimal to desired base using <code>toString(base)</code> logic and fractional conversion.</li>
  <li><b>Error Handling:</b> Display clear messages if input is invalid.</li>
</ol>

<hr/>

<h2>4. Features</h2>
<ul>
  <li>Convert between Decimal, Binary, Octal, and Hexadecimal.</li>
  <li>Handles fractional numbers accurately (e.g., <code>101.101₂ → 5.625₁₀</code>).</li>
  <li>Batch-of-five conversion for multiple numbers.</li>
  <li>Copy-to-clipboard functionality for results.</li>
  <li>Responsive design for mobile and desktop browsers.</li>
  <li>Clear error messages for invalid inputs.</li>
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

<h2>6. Group Members List</h2>
<ul>
  <li>Blair Peter Wachira – CT100/G/21430/24</li>
  <li>Gitari Dennis Mutwiri – CT100/G/21589/24</li>
  <li>Lawrence Kibet – CT100/G/21767/24</li>
  <li>Philip Aticha – CT100/G/22226/24</li>
  <li>Cynthia Wanjiru Gitau – CT100/G/20299/23</li>
</ul>

<hr/>

<h2>7. Team Roles & Contributions</h2>
<ul>
  <li><b>Blair Peter Wachira</b> – CT100/G/21430/24 – Planning, UI design, and integration of interface elements.</li>
  <li><b>Gitari Dennis Mutwiri</b> – CT100/G/21589/24 – Conversion logic, batch processing, and automated testing.</li>
  <li><b>Lawrence Kibet</b> – CT100/G/21767/24 – Frontend development, linking logic with UI, debugging.</li>
  <li><b>Philip Aticha</b> – CT100/G/22226/24 – Manual testing, documenting features, deployment assistance.</li>
  <li><b>Cynthia Wanjiru Gitau</b> – CT100/G/20299/23 – Documentation, reviewing workflow, assisting deployment.</li>
</ul>
<p><b>Note:</b> All members participated fairly in every stage of the project to ensure collaboration and success.</p>

<hr/>

<h2>8. Testing</h2>
<ul>
  <li>Manual testing for all conversions:
    <ul>
      <li>Decimal ↔ Binary</li>
      <li>Decimal ↔ Octal</li>
      <li>Decimal ↔ Hexadecimal</li>
      <li>Fractional numbers (e.g., 101.101₂)</li>
      <li>Invalid input handling</li>
    </ul>
  </li>
  <li>Optional automated tests for <code>converter.js</code> logic.</li>
</ul>

<hr/>

<h2>9. How to View / Run the Project</h2>
<h3>Live Demo</h3>
<p>Visit the deployed project link on <strong>Netlify</strong> or <strong>Vercel</strong>.</p>

<h3>Run Locally</h3>
<ul>
  <li><code>git clone https://github.com/Loree54/Group_w</code></li>
  <li><code>cd number-system-converter</code></li>
  <li><code>npm install</code></li>
  <li><code>npm run dev</code></li>
  <li>Open <code>groupw.netlify.app</code> in your browser</li>
</ul>

<hr/>

<h2>10. Deployment Instructions</h2>
<ol>
  <li>Push changes to GitHub:
    <pre>git add .  
git commit -m "Final update"  
git push origin main</pre>
  </li>
  <li>Connect GitHub repository to Netlify or Vercel and deploy.</li>
</ol>

<hr/>

<h2>11. Conclusion</h2>
<p>
The application successfully converts numbers across multiple bases, handles fractional values, 
supports batch processing, and demonstrates effective teamwork.  
All members of <b>GROUP W</b> contributed fairly to ensure the success of this project.
</p>
