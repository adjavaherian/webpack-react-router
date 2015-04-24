var React = require('react');
var Router = require('react-router');
var AppRoutes = require('./AppRoutes');

if (typeof window !== 'undefined') {
    window.onload = function() {
        Router.run(AppRoutes, Router.HistoryLocation, function(Handler, state) {
            var HandlerElement = React.createElement(Handler, {
                path: path,
                serializedFlux: serializedFlux
            });
            React.render(HandlerElement, document);
        });
    };
}
