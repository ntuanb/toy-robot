import 'reset-css';
import 'chota/dist/chota.css';

import Konva from 'konva';

import app from '../src/app';

import displayUtils from './display';
import toyUtils from './toy';

let config = {
  TABLE_SIZE: 6,
  TOY_SIZE: 10,
  RECTANGLE_SIZE: 80
};

let width = config.TABLE_SIZE * config.RECTANGLE_SIZE;
let height = config.TABLE_SIZE * config.RECTANGLE_SIZE;

let stage = new Konva.Stage({
  container: 'ui',
  width: width,
  height: height,
  x: config.RECTANGLE_SIZE,
  y: height - config.RECTANGLE_SIZE,
  scaleY: -1
});

function generateTableLayer(tableSize, rectangleSize) {
  let layer = new Konva.Layer();
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
  
  rectangles.forEach((rectangle) => {
    layer.add(rectangle);
  });

  return layer;
}

function generateToyLayer() {
  return new Konva.Layer();
}

function generateToy(toySize, rectangleSize, x, y, face) {
  let toy = new Konva.Arrow({
    points: [0, 0, toySize / 2, 0],
    pointerLength: toySize,
    pointerWidth: toySize,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 2
  });

  return toyUtils.updateToyPosition(toy, rectangleSize, x, y);
}

let tableLayer = generateTableLayer(config.TABLE_SIZE, config.RECTANGLE_SIZE);

let toyLayer = generateToyLayer();
let toy = generateToy(config.TOY_SIZE, config.RECTANGLE_SIZE);
toyLayer.add(toy);

stage.add(tableLayer);
stage.add(toyLayer);


document.getElementById('place').addEventListener(
  'click',
  function() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let face = document.getElementById('face').value;

    let position = app.run('PLACE ' + x + ',' + y + ',' + face);

    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    toyUtils.updateToyDirection(toy, position.face);
    toyLayer.draw();
    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
  },
  false
);

document.getElementById('move').addEventListener(
  'click',
  function() {
    let position = app.run('MOVE');
    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
    toyLayer.draw();
  },
  false
);

document.getElementById('left').addEventListener(
  'click',
  function() {
    let position = app.run('LEFT');
    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    toyUtils.updateToyDirection(toy, position.face);
    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
    toyLayer.draw();
  },
  false
);

document.getElementById('right').addEventListener(
  'click',
  function() {
    let position = app.run('RIGHT');
    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    toyUtils.updateToyDirection(toy, position.face);
    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
    toyLayer.draw();
  },
  false
);