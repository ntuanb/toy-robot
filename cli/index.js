const { EOL } = require('os');
const prompt = require('prompt');
const app = require('../src/app');

prompt.start();


let exit = () => {
  console.log(EOL);
  return process.exit();
}

let load = () => {
  prompt.get([{
    name: 'choice',
    message: 'Enter the input'
  }], function (err, command) {
    if (err || !command.choice) {
      exit();
    }

    app.run(command.choice);
    load();

  });
}

load();