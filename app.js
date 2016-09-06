
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	compress = require('compression'),
	errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.use(favicon(path.join(__dirname, 'public/images/favicon.PNG')));
app.use(logger('dev'));
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(compress());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Head Atlas server listening on port ' + app.get('port'));
});
