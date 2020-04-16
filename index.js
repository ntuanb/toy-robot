const prompt = require('prompt');
const { EOL } = require('os');

const place = require('./src/place');
const move = require('./src/move');

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

        position = move.move(position);
      case 'LEFT':
        if (!isPositioned()) {
          break;
        }

        position = move.left(position);
      case 'RIGHT':
        if (!isPositioned()) {
          break;
        }

        position = move.right(position);
      case 'REPORT':
        if (!isPositioned()) {
          break;
        }

        report(position);

    }

    console.log(position);

    load();
  });

}

load();