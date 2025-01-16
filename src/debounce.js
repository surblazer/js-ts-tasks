/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let timeout;

  return arg => {
    if (timeout) {
      clearTimeout(timeout);
    } else {
      timeout = setTimeout(fn, delay);
      fn(arg);
      setTimeout(() => {
        timeout = false;
      }, delay);
    }
  };
};
