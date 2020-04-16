const prompt = require('prompt');

const place = require('./src/place');
const move = require('./src/move');
const rotate = require('./src/rotate');
const utilities = require('./src/utilities');
let position = require('./src/position');

prompt.start();

let load = () => {

  prompt.get([{
    name: 'choice',
    message: 'Enter the input'
  }], function (err, command) {
    if (err || !command.choice) {
      utilities.exit();
    }

    let split = command.choice.split(' ');

    let result = {
      choice: split[0] ? split[0].toString().toUpperCase() : '',
      args: split[1] ? split[1].toString().toUpperCase() : ''
    };

    switch (result.choice) {
      case 'PLACE':
        let args = place.constructArgsToPosition(result.args);
        position = place.place(args.x, args.y, args.face);

        break;
      case 'MOVE':
        if (!utilities.isPositioned(position)) {
          break;
        }

        position = move.move(position);
        break;
      case 'LEFT':
        if (!utilities.isPositioned(position)) {
          break;
        }

        position = rotate.left(position);
        break;
      case 'RIGHT':
        if (!utilities.isPositioned(position)) {
          break;
        }

        position = rotate.right(position);
        break;
      case 'REPORT':
        utilities.report(position);
        break;

      default:
        break;
    }

    load();
  });

}

load();