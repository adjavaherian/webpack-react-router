//server/routes/index.js
//this is your main space for including routes

var express = require('express'),
    router = express.Router();

router.use(require('./react'));

module.exports = router;