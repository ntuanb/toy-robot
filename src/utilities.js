const { EOL } = require('os');

module.exports = {
  report(position) {
    /* istanbul ignore next */
    console.table(position);
  },
  exit() {
    /* istanbul ignore next */
    console.log(EOL);
    /* istanbul ignore next */
    return process.exit();
  },
  isPositioned(position) {
    if (
      position.x === null ||
      position.y === null ||
      position.face === null) {
      return false;
    }
  
    return true;
  }
}