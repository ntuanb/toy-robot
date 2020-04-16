const SIZE = 5;

module.exports = {
  place(x, y, face) {
    let position = {
      x: null,
      y: null,
      face: null
    }

    if (x >= 0 && x <= 5) {
      position.x = x;
    }

    if (y >= 0 && y <= 5) {
      position.y = y;
    }
    

    if (['NORTH', 'EAST', 'SOUTH', 'WEST'].indexOf(face) !== -1) {
      position.face = face;
    }

    if (
      position.x === null ||
      position.y === null ||
      position.face === null) {
      position = {};
    }

    return position;
  },
  constructArgsToPosition(option) {
    let options = option.split(',');

    let x = parseInt(options[0].trim());

    let y = parseInt(options[1].trim());

    let face = options[2].trim();
    
    return {
      x: x,
      y: y,
      face: face,
    }
  }
}