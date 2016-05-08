/* jshint node: true, esversion: 6 */

'use strict';
var express = require('express'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var app = express();
var Post = require('./models/post.js');

app.use(bodyParser.json());
app.use(serveStatic('public'));
app.use(serveStatic('bower_components'));

app.get('/', function (req, res) {
  var options = {
      root: __dirname + '/layouts/',
      dotfiles: 'deny',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };

  res.sendFile('posts.html', options);
});

app.get('/api/posts', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) { return next(err); }
    res.json(posts);
  });
});

app.post('/api/posts', function (req, res, next) {
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  });
  post.save(function (err, post) {
    if (err) { return next(err); }
    res.status(201).json(post);
  });
});

app.listen(3000, function () {
  console.log('Serwer nasłuchuje na porcie 3000');
});
