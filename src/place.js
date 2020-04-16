const SIZE = 5;

module.exports = {
  place(x, y, face) {
    let position = {}

    if (x > SIZE) {
      position.x = SIZE;
    } else if (x < 0) {
      position.x = 0;
    } else {
      position.x = x;
    }

    position.y = y;
    position.face = face;
  
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