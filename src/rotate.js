module.exports = {
  left(position) {
    let x = position.x;
    let y = position.y;
    let face = position.face;

    switch (face) {
      case 'NORTH':
        face = 'WEST';
        break;
      
      case 'WEST':
        face = 'SOUTH';
        break;

      case 'SOUTH':
        face = 'EAST';
        break;

      case 'EAST':
        face = 'NORTH';
        break;
    }

    return {
      x: x,
      y: y,
      face: face
    }
  },
  right(position) {
    let x = position.x;
    let y = position.y;
    let face = position.face;

    switch (face) {
      case 'NORTH':
        face = 'EAST';
        break;
      
      case 'EAST':
        face = 'SOUTH';
        break;

      case 'SOUTH':
        face = 'WEST';
        break;

      case 'WEST':
        face = 'NORTH';
        break;
    }

    return {
      x: x,
      y: y,
      face: face
    }
  }
}