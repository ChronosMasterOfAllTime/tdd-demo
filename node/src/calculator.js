function add(numbers) {
  return numbers
    .trim()
    .split(',')
    .map((x) => parseInt(x)) // this wont support floats, and doesnt check for NaN
    .reduce((a, b) => a + b)
}

exports.add = add

// SOLUTIONS

/**
 * Split RegExp /[,\s;]/
 * parseFloat(x)
 * .filter(x => !isNaN(x))
 */
