/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    let results = [];
    let pendingPromises = promisesArray.length;

    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i]
        .then(result => {
          results[i] = result;
          pendingPromises--;
          if (pendingPromises === 0) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};
