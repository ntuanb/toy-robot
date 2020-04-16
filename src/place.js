const SIZE = 5;

module.exports = {
  place(x, y, face) {
    let position = {
      x: null,
      y: null,
      face: face
    }

    if (x >= 0 && x <= 5) {
      position.x = x;
    }

    if (y >= 0 && y <= 5) {
      position.y = y;
    }

    if (
      position.x === null ||
      position.y === null) {
      position = {};
    }

    return position;
  },
  constructArgsToPosition(option) {
    let options = option.split(',');
    let position = {
      x: null,
      y: null,
      face: null
    }

    position.x = parseInt(options[0].trim());

    if (isNaN(position.x)) {
      position.x = x;
    }

    let y = parseInt(options[1].trim());

    if (isNaN(position.y)) {
      position.y = y;
    }

    let face = options[2].trim();

    if (['NORTH', 'EAST', 'SOUTH', 'WEST'].indexOf(face) !== -1) {
      position.face = face;
    }
    
    return {
      x: x,
      y: y,
      face: face,
    }
  }
}