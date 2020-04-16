const prompt = require('prompt');
const { EOL } = require('os');
const place = require('./src/place');

prompt.start();

let position = {
  x: null,
  y: null,
  face: null
};
let history = [];

let exit = () => {
  console.log(EOL);
  return process.exit();
}

let isPositioned = () => {
  if (!position.x || !position.y || !position.face) {
    return false;
  }

  return true;
}

let move = (position) => {
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

let load = () => {

  prompt.get([{
    name: 'choice',
    message: 'Enter the input'
  }], function (err, command) {
    if (err || !command.choice) {
      exit();
    }

    let split = command.choice.split(' ');
    let result = {
      command: command,
      choice: split[0],
      args: split[1]
    };

    history.push(result);

    switch (result.choice) {
      case 'PLACE':
        let args = place.constructArgsToPosition(result.args);
        position = place.place(args.x, args.y, args.face);

        break;
      case 'MOVE':
        if (!isPositioned()) {
          break;
        }

        position = move(position);
      case 'LEFT':
        if (!isPositioned()) {
          break;
        }

      case 'RIGHT':
        if (!isPositioned()) {
          break;
        }

      case 'REPORT':
        if (!isPositioned()) {
          break;
        }

    }

    console.log(position);

    load();
  });

}

load();