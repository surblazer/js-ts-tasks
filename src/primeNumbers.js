/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (num1, num2) {
    if (num1 > num2) {
      [num1, num2] = [num2, num1];
    }

    num1 = Math.max(2, num1);
    num2 = Math.min(highestNumber, num2);

    const primes = [];
    for (let i = num1; i <= num2; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    return primes;
  };
};
