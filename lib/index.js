'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var http = require('http').Server(app);

app.use(_express2.default.static('public'));

app.get('/', function (req, res) {
  return res.send(__dirname + '/index.html');
});

http.listen(3000, function () {
  return console.log('listening on *:3000');
});