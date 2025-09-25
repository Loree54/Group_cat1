# Number System Converter - Program Documentation

## 1. Overview
A web-based application that automates conversions between number systems: decimal, binary, octal, and hexadecimal. Built for GROUP1 as an assignment submission.  
Supports a clean UI and can be extended for batch-of-five processing.

## 2. Project Architecture
- **Frontend:** React + Vite
  - `App.jsx` → Main UI component
  - `main.jsx` → React entry point
  - `index.css` → Styling
- **Logic:** Node.js / JavaScript
  - `src/logic/converter.js` → Conversion functions, error handling
- **Deployment:** Static site hosted on **Vercel** or **Netlify**

## 3. Conversion Algorithm
1. **Input Validation**
   - Check input is not empty
   - Check input characters are valid for the selected base
2. **Parse Input**
   - Convert input string to decimal using `parseInt(value, fromBase)`
3. **Convert to Target Base**
   - Convert decimal value to target base using `toString(toBase)`  
   - Convert to uppercase for consistency
4. **Error Handling**
   - If input is invalid, return a clear error message

## 4. Batch-of-Five Processing (Optional / Future)
- Accept a list of numbers
- Split the list into groups of 5
- Convert each value and display results per group

## 5. File Structure
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
## 6. Team Roles & Workflow
- **Project Lead:** Loree – overall coordination, repository management
- **Developer 1:** UI and integration
- **Developer 2:** Conversion logic & batch processing
- **Tester:** Manual/automated testing
- **Documentation / DevOps:** Docs, deployment
- **Workflow:** Planning → Development → Testing → Documentation → Deployment

## 7. Testing
- Manual testing via UI:
  - Decimal ↔ Binary
  - Decimal ↔ Octal
  - Decimal ↔ Hexadecimal
  - Invalid input handling
- Optional automated tests for conversion logic

## 8. Deployment Instructions
1. Push code to GitHub:
   ```bash
   git push origin main
