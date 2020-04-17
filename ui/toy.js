function updateToyDirection(toy, face) {
  switch (face) {
    case 'NORTH': {
      toy.rotation(90);
      break;
    }

    case 'EAST': {
      toy.rotation(0);
      break;
    }

    case 'SOUTH': {
      toy.rotation(270);
      break;
    }

    case 'WEST': {
      toy.rotation(180);
      break;
    }
  }

  return toy;
}

function updateToyPosition(toy, rectangleSize, x, y) {
  toy.x(x * rectangleSize - rectangleSize / 2);
  toy.y(y * rectangleSize - rectangleSize / 2);

  return toy;
}

module.exports = {
  updateToyPosition: updateToyPosition,
  updateToyDirection: updateToyDirection
}