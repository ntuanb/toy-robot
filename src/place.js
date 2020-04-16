const SIZE = 5;
const DEFAULT = {
  x: null,
  y: null,
  face: null
};

module.exports = {
  place(x, y, face) {
    let position = JSON.parse(JSON.stringify(DEFAULT));
    
    position.face = face;

    if (x >= 0 && x <= 5) {
      position.x = x;
    }

    if (y >= 0 && y <= 5) {
      position.y = y;
    }
    

    if (
      position.x === null ||
      position.y === null) {
      position = JSON.parse(JSON.stringify(DEFAULT));
    }

    return position;
  },
  constructArgsToPosition(option) {
    let options = option.split(',');
    let position = JSON.parse(JSON.stringify(DEFAULT));

    position.x = parseInt(options[0].trim());

    if (isNaN(position.x)) {
      position.x = null;
    }

    position.y = parseInt(options[1].trim());

    if (isNaN(position.y)) {
      position.y = null;
    }

    let face = options[2].trim();

    if (['NORTH', 'EAST', 'SOUTH', 'WEST'].indexOf(face) !== -1) {
      position.face = face;
    }

    if (
      position.x === null ||
      position.y === null ||
      position.face === null) {
      position = JSON.parse(JSON.stringify(DEFAULT));;
    }
    
    return position;
  }
}