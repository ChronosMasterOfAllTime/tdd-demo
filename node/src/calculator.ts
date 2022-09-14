export function add(numbers: string) {
  return numbers
    .trim()
    .split(/[,\s;]/)
    .map((x) => parseFloat(x)) // this wont support floats, and doesnt check for NaN
    .filter((x) => !isNaN(x))
    .reduce((a, b) => a + b)
}

// SOLUTIONS

/**
 * Split RegExp /[,\s;]/
 * parseFloat(x)
 * .filter(x => !isNaN(x))
 */
