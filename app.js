/* jshint node: true, esversion: 6 */

'use strict';
var express = require('express'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var app = express();

app.use(bodyParser.json());
app.use(serveStatic('public'));
app.use(serveStatic('bower_components'));


app.use('/api/posts', require('./controllers/api/posts'));
app.use('/', require('./controllers/static'));

app.listen(3000, function () {
  console.log('Serwer nasłuchuje na porcie 3000');
});
