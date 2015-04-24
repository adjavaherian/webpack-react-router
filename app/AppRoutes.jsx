var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppTemplate = require('./AppTemplate');

var MobileAppsPage, FrontPage = null;

var FrontPageLoader = React.createClass({

    componentDidMount: function() {
        var that = this;
        require.ensure(['./pages/FrontPage'], function(require){
            FrontPage = require('./pages/FrontPage');
            that.forceUpdate();
        });
    },
    render: function() {
        if (FrontPage) {
            return <FrontPage {...this.props} />;
        } else {
            return <div className="spinner" />;
        }
    }
});


var MobileAppsPageLoader = React.createClass({

    componentDidMount: function() {
        var that = this;
        require.ensure(['./pages/MobileAppsPage'], function(require){
            MobileAppsPage = require('./pages/MobileAppsPage');
            that.forceUpdate();
        });
    },
    render: function() {
        if (MobileAppsPage) {
            return <MobileAppsPage {...this.props} />;
        } else {
            return <div className="spinner" />;
        }
    }
});

var AppRoutes = (
    <Route path='/' handler={AppTemplate}>
        <Route name="FrontPage" path='/' handler={FrontPageLoader}/>
        <Route name="MobileAppsPage" path="mobile-apps" handler={MobileAppsPageLoader}/>
    </Route>
);

module.exports = AppRoutes;
