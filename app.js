
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.png')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./config/routes')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Head Atlas server listening on port ' + app.get('port'));
});
