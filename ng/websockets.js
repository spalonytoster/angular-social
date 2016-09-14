angular.module('app')
  .run(function ($rootScope, $timeout) {
    (function connect() {
      'use strict';
      var url = 'ws://' + window.location.host;
      var connection = new WebSocket(url);

      connection.onopen = function () {
        console.log('Nawiązano połączenie z WebSocket.');
      };

      connection.onclose = function () {
        console.log('Zamknięto połączenie z WebSocket. Próba ponownego nawiązania połączenia za 5s...');
        $timeout(connect, 5 * 1000);
      };

      connection.onmessage = function (data) {
        var message = JSON.parse(data.data);
        $rootScope.$broadcast('ws:' + message.topic, message.data);
      };
    }());
  });
