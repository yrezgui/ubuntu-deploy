require('babel-core/register');

var express   = require('express');
var React     = require('react');
var config    = require('./src/config');
var index     = require('./src');
var App       = require('./src/App');
var instance  = express();

instance.use(express.static(__dirname + '/dist'));

instance.get('/', function(req, res){
  var html = React.renderToString(React.createElement(App, null));
  res.send(index.render(html));
});

var server = instance.listen(3210, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});