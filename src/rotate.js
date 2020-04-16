/**
 * Rotates the position left 
 * 
 * @param {object} position 
 * 
 * @return {object}
 */
function left(position) {
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
}

/**
 * Rotates the position right
 * 
 * @param {object} position 
 * 
 * @returns {object}
 */
function right(position) {
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

module.exports = {
  left: left,
  right: right
}