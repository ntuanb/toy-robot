const STEP_SIZE = 1;

/**
 * Move the item in the direction its facing 
 * 
 * @param {object} position 
 * 
 * @returns {object}
 */
function move(position) {  
  let x = position.x;
  let y = position.y;
  let face = position.face;

  switch (face) {
    case 'NORTH':
      y += STEP_SIZE;
      
      if (y > 5) {
        y = 5;
      }

      break;
    case 'EAST':
      x += STEP_SIZE;

      if (x > 5) {
        x = 5;
      }
      
      break;
    case 'SOUTH':
      y -= STEP_SIZE;
      
      if (y < 0) {
        y = 0;
      }

      break;
    case 'WEST':
      x -= STEP_SIZE;
      
      if (x < 0) {
        x = 0;
      }

      break;
  }

  return {
    x: x,
    y: y,
    face: face
  }
}

module.exports = {
  move: move
}