const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', (input) => {
  console.log('Received: ' + input);
});