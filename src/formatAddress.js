/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (format) {
    return `${format['street']}, ${format['house']}, ${format['apartment']}, ${format['city']}, ${format['postalCode']}, ${format['country']}`;
  };
};
