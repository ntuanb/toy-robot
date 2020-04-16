module.exports = {
  move(position) {
    const STEP_SIZE = 1;
  
    let x = position.x;
    let y = position.y;
    let face = position.face;
  
    switch (face) {
      case 'NORTH':
        y += STEP_SIZE;
        
        if (y > 5) {
          y = 5;
        } else if (y < 0) {
          y = 0;
        }
    }
  
    return {
      x: x,
      y: y,
      face: face
    }
  }
}