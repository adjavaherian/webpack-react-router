var React = require('react');
var Router = require('react-router');
var AppRoutes = require('./AppRoutes');

if (typeof window !== 'undefined') {
    window.onload = function() {
        console.log('window on load');
        Router.run(AppRoutes, Router.HistoryLocation, function(Handler, state) {
            var HandlerElement = React.createElement(Handler, {
                path: window.location.pathname
            });
            React.render(HandlerElement, document);
        });
    };
}
