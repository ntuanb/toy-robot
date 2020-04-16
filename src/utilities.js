module.exports = {
  report(position) {
    console.table(position);
    return position.x + ',' + position.y + ',' + position.face;
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