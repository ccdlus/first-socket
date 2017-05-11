const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

// wss.broadcast = function broadcast(data) {
//   wss.clients.forEach(function each(client) {
//     if (client.readyState === WebSocket.OPEN) {
//       client.send(data);
//     }
//   });
// };
 

wss.on('connection', function connection(ws){
    console.log("================== THERE'S ONE CLIENT CONNECTED ==================");
    ws.on('message', function incoming(data){
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(data);
            }
        });
        console.log((new Date()) + 'Receive: ' + data);
    });

    ws.on('close', function close(code, reason) {
        console.log((new Date()) + ' Peer disconnected.');
    });

});