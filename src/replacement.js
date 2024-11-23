/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let numArr = [];
  const digitsType = (digit) => {
    if (digit === 1) {
      return 1;
    } else if (digit === 2) {
      return 2;
    } else if (digit === 3) {
      return 3;
    }
    return 4;
  }

  for (let i = 0; i < arr.length; i++) {
    const numberDig = Math.abs(arr[i]).toString().length;
    numArr.push(digitsType(numberDig));
  }
  return numArr;
};
