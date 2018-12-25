/**
 * @param {number} number
 * @return {number}
 */
function factorial (number) {
  let result = 1

  for (let i = 1; i <= number; i = i + 1) {
    result = result * i
  }

  return result
}

module.exports = {
  factorial
}
