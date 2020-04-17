function create(tableSize, rectangleSize) {
  let width = tableSize * rectangleSize;
  let height = tableSize * rectangleSize;

  return new Konva.Stage({
    container: 'ui',
    width: width,
    height: height,
    x: rectangleSize,
    y: height - rectangleSize,
    scaleY: -1
  });
}

function createTable(tableSize, rectangleSize) {
  let rectangles = [];

  for (let x = -1; x < tableSize; x += 1) {
    for (let y = -1; y < tableSize; y += 1) {
      let rectangle = new Konva.Rect({
        x: x * rectangleSize,
        y: y * rectangleSize,
        width: rectangleSize,
        height: rectangleSize,
        fill: 'white',
        stroke: '#555555',
        strokeWidth: 1
      });
      rectangles.push(rectangle);
    }
  }

  return rectangles;
}

module.exports = {
  create: create,
  createTable: createTable
}