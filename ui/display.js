function updatePositionDisplay(x, y, face) {
  document.getElementById('x').value = x;
  document.getElementById('y').value = y;
  document.getElementById('face').value = face;
}

module.exports = {
  updatePositionDisplay: updatePositionDisplay
}