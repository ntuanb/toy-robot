const prompt = require('prompt');
const { EOL } = require('os');

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

let place = (x, y, face) => {
  let position = {}

  position.x = x;
  position.y = y;
  position.face = face;

  return position;
}

let constructArgsToPosition = (option) => {
  let options = option.split(',');

  let x = parseInt(options[0].trim());

  let y = parseInt(options[1].trim());

  let face = options[2].trim();
  
  return {
    x: x,
    y: y,
    face: face,
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
        let args = constructArgsToPosition(result.args);
        position = place(args.x, args.y, args.face);
        break;
      case 'MOVE':
      case 'LEFT':
      case 'RIGHT':
      case 'REPORT':
    }

    console.log(position);

    load();
  });

}

load();