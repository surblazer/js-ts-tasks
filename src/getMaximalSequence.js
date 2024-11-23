/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxSequence = [];
  let currSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currSequence.push(arr[i]);
    } else {
      if (currSequence.length > maxSequence.length) {
        maxSequence = currSequence;
      }
      currSequence = [arr[i]];
    }
  }

  if (currSequence.length > maxSequence.length) {
    maxSequence = currSequence;
  }
  
  return maxSequence;
}
