const utilities = require('./utilities');
const place = require('./place');
const move = require('./move');
const rotate = require('./rotate');

let position = require('./position');

/**
 * Runs the command based on the passed in string
 * 
 * @param {string} command 
 * 
 * @returns {object}
 */
function run(command) {
  let split = command.split(' ');

  let result = {
    choice: split[0] ? split[0].toString().toUpperCase() : '',
    args: split[1] ? split[1].toString().toUpperCase() : ''
  };

  switch (result.choice) {
    case 'PLACE': {
      let args = place.constructArgsToPosition(result.args);
      position = place.place(args.x, args.y, args.face);

      break;
    }
    case 'MOVE': {
      if (!utilities.isPositioned(position)) {
        break;
      }

      position = move.move(position);
      break;
    }
    case 'LEFT': {
      if (!utilities.isPositioned(position)) {
        break;
      }

      position = rotate.left(position);
      break;
    }
    case 'RIGHT': {
      if (!utilities.isPositioned(position)) {
        break;
      }

      position = rotate.right(position);
      break;
    }
    case 'REPORT': {
      utilities.report(position);
      break;
    }
  }

  return position;
}

module.exports = {
  run: run
}