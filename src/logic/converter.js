// src/logic/converter.js

// Convert a number string with fractional part from any base to decimal
export function parseInput(value, base) {
  if (!value.includes(".")) return parseInt(value, base);

  const [intPart, fracPart] = value.split(".");
  let decimal = parseInt(intPart, base);

  for (let i = 0; i < fracPart.length; i++) {
    const digit = parseInt(fracPart[i], base);
    if (isNaN(digit)) throw new Error("Invalid digit");
    decimal += digit / Math.pow(base, i + 1);
  }
  return decimal;
}

// Convert decimal number to any base including fractions
export function convertToBase(num, base, precision = 10) {
  const intPart = Math.floor(num);
  let fracPart = num - intPart;

  let intStr = intPart.toString(base).toUpperCase();
  if (precision === 0 || fracPart === 0) return intStr;

  let fracStr = "";
  let count = 0;

  while (fracPart > 0 && count < precision) {
    fracPart *= base;
    let digit = Math.floor(fracPart + 1e-12); // tiny epsilon to avoid floating point errors
    fracStr += digit.toString(base).toUpperCase();
    fracPart -= digit;
    count++;
    if (Math.abs(fracPart) < 1e-12) break; // stop if remainder effectively zero
  }

  return intStr + "." + fracStr;
}

// Batch process in groups of 5
export function batchConvert(values, fromBase, toBase, precision = 10) {
  const results = [];
  for (let i = 0; i < values.length; i += 5) {
    const group = values.slice(i, i + 5).map(v => {
      try {
        const num = parseInput(v, fromBase);
        const converted = convertToBase(num, toBase, precision);
        return { input: v, output: converted, error: null };
      } catch (e) {
        return { input: v, output: null, error: "Invalid number" };
      }
    });
    results.push(group);
  }
  return results;
}
