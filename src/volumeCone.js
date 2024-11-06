/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // V=(1/3) * π * r² * h.
  const Vformula = (1/3 * Math.PI * Math.pow(r, 2) * h);
  return Vformula.toFixed(2)
  throw new Error('Not implemented');
};
