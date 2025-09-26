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

<h2>6. Group Members & Teamwork</h2>
<div>
  <ul>
    <li><b>Blair Peter Wachira</b> – CT100/G/21430/24</li>
    <li><b>Gitari Dennis Mutwiri</b> – CT100/G/21589/24</li>
    <li><b>Lawrence Kibet</b> – CT100/G/21767/24</li>
    <li><b>Philip Aticha</b> – CT100/G/22226/24</li>
    <li><b>Cynthia Wanjiru Gitau</b> – CT100/G/20299/23</li>
  </ul>
  <p>
  All members contributed equally in planning, coding, UI design, testing, and documentation.  
  Tasks were shared fairly to ensure teamwork and full participation.
  </p>
</div>

<hr/>

<h2>7. Testing</h2>
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

<h2>8. How to View / Run the Project</h2>
<h3>Live Demo</h3>
<p>Visit the deployed project link on <strong>Netlify</strong> or <strong>Vercel</strong>.</p>

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
<p>Open <code>http://localhost:5173/</code> in your browser to view the project.</p>

<hr/>

<h2>9. Deployment Instructions</h2>
<ol>
  <li>Push changes to GitHub:
    <pre>git add .  
git commit -m "Final update"  
git push origin main</pre>
  </li>
  <li>Connect GitHub repository to Netlify or Vercel and deploy.</li>
</ol>

<hr/>

<h2>10. Conclusion</h2>
<p>
The application successfully converts numbers across multiple bases, handles fractional values, 
supports batch processing, and demonstrates effective teamwork.  
All members of <b>GROUP W</b> contributed fairly to ensure the success of this project.
</p>
