/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const diffArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!diffArr.includes(arr[i])) {
      diffArr.push(arr[i]);
    }
  }
  return diffArr.length;
};
