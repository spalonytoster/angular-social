angular.module('app')
  .service('WebSocketSvc', function ($rootScope, $timeout) {
    function webSocketHost() {
      if (window.location.protocol === 'https:') {
        return 'wss://' + window.location.host;
      }
      else {
        return 'ws://' + window.location.host;
      }
    }

    var connection;
    this.connect = function connect() {
      connection = new WebSocket(webSocketHost());

      connection.onmessage = function (e) {
        var payload = JSON.parse(e.data);
        $rootScope.$broadcast('ws:' + payload.topic, payload.data);
      };

      connection.onopen = function () {
        console.log('Nawiązano połączenie z WebSocket.');
      };

      connection.onclose = function () {
        console.log('Zamknięto połączenie z WebSocket. Próba ponownego nawiązania połączenia za 5s...');
        $timeout(connect, 5 * 1000);
      };
    };
    this.send = function (topic, data) {
      var json = JSON.stringify({ topic: topic, data: data });
      connection.send(json);
    };
  }).run(function (WebSocketSvc) {
    WebSocketSvc.connect();
  });
