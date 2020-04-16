const { EOL } = require('os');

module.exports = {
  exit() {
    console.log(EOL);
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
  },
  report(position) {
    console.table(position);
  }
}