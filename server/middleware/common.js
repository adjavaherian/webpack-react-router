//server/middleware/common.js
//app uses all of these for every route

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var path = require('path');

module.exports = function(server) {
    server.use(compression());
    server.use(morgan('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: true,
        inflate: true
    }));
    server.use(cookieParser());
    server.use(express.static('dist'));
};
