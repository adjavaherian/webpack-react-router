//index.js
//the single express server
//routes and middleware are in routes.js

var express = require('express');
var routes = require('./server/routes');
var server = express();
var port = 3000;

//config
//trusts the load balancer to provide X-Forwarded-For headers
//also checks the X-Forwarded-Proto header to see if the load balancer is decrypting https

server.enable('trust proxy');
server.disable('x-powered-by');

//use common middleware
require('./server/middleware/common')(server);

//use routes
server.use(routes);

server.listen(port, function (){
    console.info('Express server listening on port: ' + port);
});

//process.on('uncaughtException', function(err) {
//    logger.error(err);
//    //don't think we should be doing this here
//    process.exit(1);
//});


