
/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
function fibonacciNth (n) {
  let result = 1

  let currentValue = 1
  let previousValue = 0

  if (n === 1 || n === 2) return result

  let counter = n - 1

  while (counter) {
    currentValue = currentValue + previousValue
    previousValue = currentValue - previousValue

    counter = counter - 1
  }

  return currentValue
}

module.exports = {
  fibonacciNth
}
