function create(toySize, rectangleSize, x, y, face) {
  let toy = new Konva.Arrow({
    x: -1 * rectangleSize,
    y: -1 * rectangleSize,
    points: [0, 0, toySize / 2, 0],
    pointerLength: toySize,
    pointerWidth: toySize,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 2
  });

  return toy;
}

function updateToyDirection(toy, face) {
  if (!toy) {
    return null;
  }

  let degrees = 0;

  switch (face) {
    case 'NORTH': {
      degrees = 90;
      break;
    }

    case 'EAST': {
      degrees = 0;
      break;
    }

    case 'SOUTH': {
      degrees = 270;
      break;
    }

    case 'WEST': {
      degrees = 180;
      break;
    }
  }

  toy.rotation(degrees);

  return toy;
}

function updateToyPosition(toy, rectangleSize, x, y) {
  if (!toy) {
    return null;
  }

  if (x === null || y === null) {
    return null;
  }

  let tween = new Konva.Tween({
    node: toy,
    duration: 0.2,
    x: x * rectangleSize - rectangleSize / 2,
    y: y * rectangleSize - rectangleSize / 2,
    easing: Konva.Easings.EaseInOut
  });

  tween.play();

  return toy;
}

module.exports = {
  create: create,
  updateToyPosition: updateToyPosition,
  updateToyDirection: updateToyDirection
}