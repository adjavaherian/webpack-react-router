//server/routes/react.js
//main route to react

require('node-jsx').install({
    extension: '.jsx'
});
var React = require('react');
var Router = require('react-router');
var url = require('url');
var AppRoutes = require('../../app/AppRoutes.jsx');
var express = require('express'),
    router = express.Router();

router.route('/*').get(function(req, res) {
    var path = url.parse(req.url).pathname;

    Router.run(AppRoutes, req.url, function(Handler) {
        var HandlerElement = React.createElement(Handler, {
            flux: {},
            path: path
        });
        var markup;
        //console.log(HandlerElement);
        try {
            markup = React.renderToString(HandlerElement);
            console.log( React.renderToString(HandlerElement));
            if (markup.indexOf('NotFoundPage') > -1) {
                res.status(404);
            }
        } catch (e) {
            markup = 'An error has occurred: ' + e;

            res.status(500);
        }

        res.send(markup);
    });
});

module.exports = router;
