# Number System Converter - Program Documentation

<div align="center">

# 💻 Program Documentation  
### Automation of Number System Conversion  

</div>

---

## 📌 Overview  
<p>
This program is a web-based number system converter that allows users to convert numbers  
between <b>Binary</b>, <b>Decimal</b>, <b>Octal</b>, and <b>Hexadecimal</b> systems.  
It also supports fractional conversions (e.g., <code>101.101₂ = 5.625₁₀</code>).  
</p>

---

## 📂 Program Structure  

<ul>
  <li><b>src/logic/converter.js</b> → Handles number conversion logic.</li>
  <li><b>src/App.jsx</b> → Main user interface (input fields, dropdowns, convert button, output).</li>
  <li><b>src/index.js</b> → Entry point of the React application.</li>
  <li><b>public/</b> → Contains static files like favicon and index.html.</li>
</ul>

---

## 🔑 Key Components  

<h3>1. Conversion Logic (<code>converter.js</code>)</h3>
<ul>
  <li><code>parseInput(value, base)</code> → Converts input number string from any base into decimal.</li>
  <li><code>convertToBase(num, base, precision)</code> → Converts a decimal number into the desired base.</li>
  <li><code>batchConvert(values, fromBase, toBase)</code> → Processes multiple conversions in groups of five.</li>
</ul>

<h3>2. User Interface (<code>App.jsx</code>)</h3>
<ul>
  <li>Input field for the number.</li>
  <li>Dropdown menus for selecting <b>From Base</b> and <b>To Base</b>.</li>
  <li>Convert button for triggering conversion.</li>
  <li>Clear output display with accurate results.</li>
</ul>

---

## ⚙️ How to Run Locally  

<ol>
  <li>Clone the repository:
    <pre><code>git clone &lt;YOUR_GITHUB_REPO_LINK&gt;  
cd number-system-conversion-project</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Start the development server:
    <pre><code>npm start</code></pre>
  </li>
</ol>

---

## 🚀 Deployment  

<p>The project was deployed using <b>Netlify</b>.</p>  

<ol>
  <li>Linked GitHub repository to Netlify.</li>
  <li>Selected the correct build command (<code>npm run build</code>).</li>
  <li>Chose the <code>build/</code> directory as the publish folder.</li>
  <li>Successfully deployed and generated a live link.</li>
</ol>

<p>
🔗 <b>GitHub Repository:</b> <a href="&lt;YOUR_GITHUB_REPO_LINK&gt;">View on GitHub</a><br>
🌍 <b>Live Project:</b> <a href="&lt;YOUR_PROJECT_LINK&gt;">View Here</a>
</p>

---

## ✅ Conclusion  
<p>
The program is modular, well-structured, and user-friendly.  
It not only performs accurate number system conversions but also provides a  
simple and clear user interface for learners and professionals.  
</p>
