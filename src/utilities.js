
/**
 * Ouputs the position into the expected structure for display
 * 
 * @param {object} position 
 * 
 * @returns {string}
 */
function report(position) {
  console.table(position);
  return position.x + ',' + position.y + ',' + position.face;
}

/**
 * Checks if the position is valid and return true or false
 * 
 * @param {object} position 
 * 
 * @returns {boolean}
 */
function isPositioned(position) {
  if (
    position.x === null ||
    position.y === null ||
    position.face === null) {
    return false;
  }

  return true;
}

module.exports = {
  report: report,
  isPositioned: isPositioned
}