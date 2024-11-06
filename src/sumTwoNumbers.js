/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const parseNumber = (num) => {
    if (typeof num === 'string') {
      const trimmedstr = String(num).trim();
      const finalnum = trimmedstr.split(' ').join('');
      return parseInt(finalnum, 10);
    }
    return num;
  };

  return parseNumber(firstNumber) + parseNumber(secondNumber);
  throw new Error('Not implemented');
};
