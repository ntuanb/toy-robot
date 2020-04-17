import 'reset-css';
import 'chota/dist/chota.css';
import './index.css';
import './particles';

import Konva from 'konva';

import app from '../src/app';

import config from './config';
import displayUtils from './display';
import stageUtils from './stage';
import toyUtils from './toy';

let stage = stageUtils.create(config.TABLE_SIZE, config.RECTANGLE_SIZE);

let tableLayer = new Konva.Layer();
let rectangles = stageUtils.createTable(config.TABLE_SIZE, config.RECTANGLE_SIZE);
rectangles.forEach((rectangle) => {
  tableLayer.add(rectangle);
});

let toyLayer = new Konva.Layer();
let toy = null;

stage.add(tableLayer);
stage.add(toyLayer);

document.getElementById('place').addEventListener(
  'click',
  function() {
    toy = toyUtils.create(config.TOY_SIZE, config.RECTANGLE_SIZE, -1, -1);
    toyLayer.add(toy);

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
    toyLayer.draw();

    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
  },
  false
);

document.getElementById('left').addEventListener(
  'click',
  function() {
    let position = app.run('LEFT');
    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    toyUtils.updateToyDirection(toy, position.face);
    toyLayer.draw();

    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
  },
  false
);

document.getElementById('right').addEventListener(
  'click',
  function() {
    let position = app.run('RIGHT');
    toyUtils.updateToyPosition(toy, config.RECTANGLE_SIZE, position.x, position.y);
    toyUtils.updateToyDirection(toy, position.face);
    toyLayer.draw();

    displayUtils.updatePositionDisplay(position.x, position.y, position.face);
  },
  false
);