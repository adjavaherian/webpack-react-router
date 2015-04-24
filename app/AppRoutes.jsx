var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppTemplate = require('./AppTemplate');
var FrontPage = require('./pages/FrontPage');
var MobileAppsPage = require('./pages/MobileAppsPage');

var AppRoutes = (
    <Route path='/' handler={AppTemplate}>
        <Route name="FrontPage" path='/' handler={FrontPage}/>
        <Route name="MobileAppsPage" path="mobile-apps" handler={MobileAppsPage}/>
    </Route>
);

module.exports = AppRoutes;
