var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppTemplate = require('./AppTemplate');
var PageLoader = require('./PageLoader');

var AppRoutes = (
    <Route path='/' handler={AppTemplate}>
        <Route name="FrontPage" path='/' handler={PageLoader.FrontPage}/>
        <Route name="MobileAppsPage" path="mobile-apps" handler={PageLoader.MobileAppsPage}/>
    </Route>
);

module.exports = AppRoutes;
