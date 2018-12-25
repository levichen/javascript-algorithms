/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
function fibonacci (n) {
  const result = [1]

  let currentValue = 1
  let previousValue = 0

  if (n === 1) return result

  let counter = n - 1

  while (counter) {
    currentValue = currentValue + previousValue
    previousValue = currentValue - previousValue

    result.push(currentValue)

    counter = counter - 1
  }

  return result
}

module.exports = {
  fibonacci
}
