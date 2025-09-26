# Number System Converter - Program Documentaton 
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number System Converter - Program Documentation</title>
    <style>
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #7209b7;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
            --warning: #f72585;
            --gray: #6c757d;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: var(--dark);
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 30px;
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--primary), var(--accent), var(--secondary));
        }

        h1 {
            color: var(--secondary);
            margin-bottom: 10px;
            font-size: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }

        .subtitle {
            color: var(--accent);
            font-size: 1.2rem;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .badge-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .badge {
            background: var(--primary);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
        }

        .card {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 25px;
            margin-bottom: 25px;
            transition: var(--transition);
            border-left: 4px solid var(--primary);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: var(--secondary);
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #f0f0f0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        h2::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--accent);
            border-radius: 50%;
        }

        h3 {
            color: var(--primary);
            margin: 20px 0 10px;
        }

        p {
            margin-bottom: 15px;
        }

        ul, ol {
            margin-left: 20px;
            margin-bottom: 15px;
        }

        li {
            margin-bottom: 8px;
        }

        strong {
            color: var(--secondary);
        }

        code {
            background: #f5f5f5;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            color: var(--accent);
        }

        pre {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 15px;
            border-radius: var(--border-radius);
            overflow-x: auto;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
        }

        .file-structure {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: var(--border-radius);
            padding: 20px;
            margin: 15px 0;
        }

        .file-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            padding-left: 20px;
        }

        .file-item::before {
            content: '📄';
            margin-right: 10px;
        }

        .folder {
            font-weight: 600;
            color: var(--secondary);
        }

        .folder::before {
            content: '📁';
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }

        .team-member {
            background: #f8f9fa;
            padding: 15px;
            border-radius: var(--border-radius);
            border-left: 3px solid var(--primary);
        }

        .member-name {
            font-weight: 600;
            color: var(--secondary);
            margin-bottom: 5px;
        }

        .member-role {
            color: var(--accent);
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }

        .feature-item {
            background: #f0f8ff;
            padding: 15px;
            border-radius: var(--border-radius);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .feature-icon {
            font-size: 1.5rem;
        }

        hr {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            margin: 30px 0;
        }

        .note {
            background: #fff9e6;
            border-left: 4px solid #ffc107;
            padding: 15px;
            border-radius: 4px;
            margin: 15px 0;
        }

        .command {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 10px 15px;
            border-radius: var(--border-radius);
            font-family: 'Courier New', monospace;
            margin: 10px 0;
            display: block;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
                flex-direction: column;
                gap: 5px;
            }
            
            .team-grid, .feature-list {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>📘 PROGRAM DOCUMENTATION</h1>
            <p class="subtitle">Number System Converter - Group W</p>
            <div class="badge-container">
                <span class="badge">React + Vite</span>
                <span class="badge">JavaScript</span>
                <span class="badge">Responsive Design</span>
                <span class="badge">Netlify Deployment</span>
            </div>
        </header>

        <div class="card">
            <h2>📋 1. Overview</h2>
            <p>
                This web-based application automates conversions between number systems: <strong>Decimal</strong>, 
                <strong>Binary</strong>, <strong>Octal</strong>, and <strong>Hexadecimal</strong>.  
                Developed by <strong>GROUP W</strong> as an academic assignment submission.  
                The app features a clean interface, accurate conversion logic, supports fractional numbers, 
                and can process numbers in batches of five.
            </p>
        </div>

        <hr>

        <div class="card">
            <h2>🏗️ 2. Project Architecture</h2>
            <ul>
                <li><strong>Frontend:</strong> React + Vite
                    <ul>
                        <li><code>App.jsx</code> → Main UI component</li>
                        <li><code>main.jsx</code> → React entry point</li>
                        <li><code>index.css</code> → Styling</li>
                    </ul>
                </li>
                <li><strong>Logic:</strong> Node.js / JavaScript
                    <ul>
                        <li><code>src/logic/converter.js</code> → Conversion functions, error handling</li>
                    </ul>
                </li>
                <li><strong>Deployment:</strong> Static site hosted on <strong>Netlify</strong> or <strong>Vercel</strong></li>
            </ul>
        </div>

        <hr>

        <div class="card">
            <h2>⚙️ 3. Conversion Algorithm</h2>
            <ol>
                <li><strong>Input Validation:</strong> Ensure input is not empty and only valid characters are used for the selected base.</li>
                <li><strong>Parse Input:</strong> Convert the input string to decimal, handling integer and fractional parts separately.</li>
                <li><strong>Convert to Target Base:</strong> Transform decimal to desired base using <code>toString(base)</code> logic and fractional conversion.</li>
                <li><strong>Error Handling:</strong> Display clear messages if input is invalid.</li>
            </ol>
        </div>

        <hr>

        <div class="card">
            <h2>✨ 4. Features</h2>
            <div class="feature-list">
                <div class="feature-item">
                    <span class="feature-icon">🔄</span>
                    <span>Convert between Decimal, Binary, Octal, and Hexadecimal</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">🔢</span>
                    <span>Handles fractional numbers accurately (e.g., <code>101.101₂ → 5.625₁₀</code>)</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📊</span>
                    <span>Batch-of-five conversion for multiple numbers</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📋</span>
                    <span>Copy-to-clipboard functionality for results</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">📱</span>
                    <span>Responsive design for mobile and desktop browsers</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">⚠️</span>
                    <span>Clear error messages for invalid inputs</span>
                </div>
            </div>
        </div>

        <hr>

        <div class="card">
            <h2>📁 5. File Structure</h2>
            <div class="file-structure">
                <div class="file-item folder">number-system-converter/</div>
                <div class="file-item folder" style="padding-left: 40px;">src/</div>
                <div class="file-item folder" style="padding-left: 60px;">logic/</div>
                <div class="file-item" style="padding-left: 80px;">converter.js</div>
                <div class="file-item" style="padding-left: 60px;">App.jsx</div>
                <div class="file-item" style="padding-left: 60px;">main.jsx</div>
                <div class="file-item" style="padding-left: 60px;">index.css</div>
                <div class="file-item" style="padding-left: 40px;">index.html</div>
                <div class="file-item" style="padding-left: 40px;">package.json</div>
                <div class="file-item" style="padding-left: 40px;">vite.config.js</div>
                <div class="file-item" style="padding-left: 40px;">README.md</div>
                <div class="file-item" style="padding-left: 40px;">PROCESS.md</div>
                <div class="file-item" style="padding-left: 40px;">PROGRAM.md</div>
            </div>
        </div>

        <hr>

        <div class="card">
            <h2>👥 6. Team Roles & Contributions</h2>
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-name">Blair Peter Wachira</div>
                    <div class="member-role">Planning, UI design, and integration of interface elements</div>
                </div>
                <div class="team-member">
                    <div class="member-name">Gitari Dennis Mutwiri</div>
                    <div class="member-role">Conversion logic, batch processing, and automated testing</div>
                </div>
                <div class="team-member">
                    <div class="member-name">Lawrence Kibet</div>
                    <div class="member-role">Frontend development, linking logic with UI, debugging</div>
                </div>
                <div class="team-member">
                    <div class="member-name">Philip Aticha</div>
                    <div class="member-role">Manual testing, documenting features, deployment assistance</div>
                </div>
                <div class="team-member">
                    <div class="member-name">Cynthia Wanjiru Gitau</div>
                    <div class="member-role">Documentation, reviewing workflow, assisting deployment</div>
                </div>
            </div>
            <div class="note">
                <strong>Note:</strong> All members participated fairly in every stage of the project to ensure collaboration and success.
            </div>
        </div>

        <hr>

        <div class="card">
            <h2>🧪 7. Testing</h2>
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
        </div>

        <hr>

        <div class="card">
            <h2>🚀 8. How to View / Run the Project</h2>
            <h3>Live Demo</h3>
            <p>Visit the deployed project link on <strong>Netlify</strong> or <strong>Vercel</strong>.</p>
            
            <h3>Run Locally</h3>
            <pre># Clone the repository
git clone https://github.com/username/number-system-converter.git

# Navigate into project folder
cd number-system-converter

# Install dependencies
npm install

# Start development server
npm run dev</pre>
            <p>Open <code>http://localhost:5173/</code> in your browser to view the project.</p>
        </div>

        <hr>

        <div class="card">
            <h2>🌐 9. Deployment Instructions</h2>
            <ol>
                <li>Push changes to GitHub:
                    <pre>git add .  
git commit -m "Final update"  
git push origin main</pre>
                </li>
                <li>Connect GitHub repository to Netlify or Vercel and deploy.</li>
            </ol>
        </div>

        <hr>

        <div class="card">
            <h2>✅ 10. Conclusion</h2>
            <p>
                The application successfully converts numbers across multiple bases, handles fractional values, 
                supports batch processing, and demonstrates effective teamwork.  
                All members of <strong>GROUP W</strong> contributed fairly to ensure the success of this project.
            </p>
        </div>
    </div>

    <script>
        // Add subtle animations to cards when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });
    </script>
</body>
</html>
