/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  type Unit = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';
  const validUnits: Unit[] = ['m', 'mi', 'gr', 'pound', 'C', 'K'];
  let result: number;

  // Validate input units
  if (!validUnits.includes(from as Unit) || !validUnits.includes(to as Unit)) {
    throw new Error();
  }

  if (from === 'm' && to === 'mi') {
    result = value * 0.000621371;
  } else if (from === 'mi' && to === 'm') {
    result = value * 1609.34;
  } else if (from === 'gr' && to === 'pound') {
    result = value * 0.00220462;
  } else if (from === 'pound' && to === 'gr') {
    result = value * 453.592;
  } else if (from === 'C' && to === 'K') {
    result = value + 273.15;
  } else if (from === 'K' && to === 'C') {
    result = value - 273.15;
  } else {
    throw new Error();
  }

  return parseFloat(result.toFixed(2));
};
