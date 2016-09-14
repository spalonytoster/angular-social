var redis = require('redis'),
    client = redis.createClient(),
    websockets = require('./websockets');

exports.publish = function (topic, data) {
  client.publish(topic, JSON.stringify(data));
};

exports.subscribe = function (topic, callback) {
  var client = redis.createClient();
  client.subscribe(topic);
  client.on('message', function (channel, message) {
    var data = JSON.parse(message);
    websockets.broadcast(channel, data);
    if (callback) {
      callback(data);
    }
  });
};
