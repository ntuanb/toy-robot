function updatePositionDisplay(x, y, face) {
  document.getElementById('x').value = x === null ? 0 : x;
  document.getElementById('y').value = y === null ? 0 : y;
  document.getElementById('face').value = face === null ? 'NORTH' : face;
}

module.exports = {
  updatePositionDisplay: updatePositionDisplay
}