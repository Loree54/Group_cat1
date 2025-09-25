// Conversion logic for different number systems

export function convertNumber(value, fromBase, toBase) {
  if (value.trim() === '') return ''

  // Map number system names to radix values
  const bases = {
    decimal: 10,
    binary: 2,
    octal: 8,
    hexadecimal: 16,
  }

  const from = bases[fromBase]
  const to = bases[toBase]

  // Convert input value to decimal first
  let decimalValue = parseInt(value, from)

  if (isNaN(decimalValue)) {
    throw new Error('Invalid number input')
  }

  // Convert decimal to target base
  return decimalValue.toString(to).toUpperCase()
}
