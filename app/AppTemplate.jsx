var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var AppTemplate = React.createClass({
    displayName: 'AppTemplate',
    mixins: [FluxMixin],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            AppStore: {}
        };
    },
    render: function() {
        var AppStore = this.getFlux().store('AppStore');

        return (
            <html>
                <head lang="en">
                    <title> Webpack React Router Example </title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="Content-type" content="text/html; charset=iso-8859-1"/>
                    <meta httpEquiv="Content-Language" content="en-us"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
                    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
                    <script type='text/javascript' src="dist/js/commons.js" />
                    <script type='text/javascript' src="dist/js/app.bundle.js" />
                    <script type='text/javascript' src="dist/js/rehydrate.bundle.js" />
                    <script type='text/javascript' src="dist/js/frontPage.bundle.js" />
                </head>
                <body>
                    <RouteHandler {...this.props}/>
                </body>
            </html>
        );
    }
});

module.exports = AppTemplate;

