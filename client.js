const WebSocket = require('ws');
const readline = require('readline');
 
const ws = new WebSocket('ws://localhost:8080');

const name = process.argv[2];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

ws.on('open', function open() {
    var sendString = 'Helloooo! I\'m ' + name;
    ws.send(name + ": " + sendString);
    console.log(sendString);
});


ws.on('message', function incoming(data, flags) {
  console.log(data);
});


rl.on('line', (input) => {
    ws.send(name + ": " + input);
});



