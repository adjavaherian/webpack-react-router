var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppTemplate = require('./AppTemplate');
var FrontPage = require('./pages/FrontPage');

var MobileAppsPage = null;

var MobileAppsPageLoader = React.createClass({
    componentDidMount: function() {
        require.ensure(['./pages/MobileAppsPage'], function(){
            MobileAppsPage = require('./pages/MobileAppsPage');
            this.forceUpdate();
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
        <Route name="FrontPage" path='/' handler={FrontPage}/>
        <Route name="MobileAppsPage" path="mobile-apps" handler={MobileAppsPageLoader}/>
    </Route>
);

module.exports = AppRoutes;
