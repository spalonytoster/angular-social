/* jshint node: true, esversion: 6 */
'user strict';

var ws = require('ws'),
    _ = require('lodash');
var clients = [];

exports.connect = function (server) {
  var wss = new ws.Server({ server: server });
  wss.on('connection', function (ws) {
    console.log("Otrzymano połączenie.");
    clients.push(ws);
    exports.broadcast('Dołączył nowy klient.');
    console.log("Aktualnie połączonych klientow: " + clients.length);

    ws.on('close', function () {
      console.log('Zamknięto połączenie.');
      _.remove(clients, ws);
      console.log("Aktualnie połączonych klientow: " + clients.length);
    });
  });
};

exports.broadcast = function (topic, data) {
  var json = JSON.stringify({ topic: topic, data: data });
  clients.forEach(function (client) {
    client.send(json);
  });
};
