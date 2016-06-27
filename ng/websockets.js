angular.module('app')
  .run(function ($rootScope) {
    var url = 'ws://' + window.location.host;
    var connection = new WebSocket(url);

    connection.onopen = function () {
      console.log('Nawiązano połączenie z WebSocket.');
    };

    connection.onmessage = function (data) {
      var message = JSON.parse(data.data);
      $rootScope.$broadcast('ws:' + message.topic, message.data);
    };
  });
