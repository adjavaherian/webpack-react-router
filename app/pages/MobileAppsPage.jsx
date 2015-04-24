var React = require('react');
var Hero = require('../modules/Hero');
var TestClass = require('../modules/TestClass.jsx');

var MobileAppsPage = React.createClass({
    displayName: 'MobileAppsPage',
    render: function() {
        return (
            <div className="MobileAppsPage container">
                <Hero />
                <TestClass />
            </div>
        );
    }
});

module.exports = MobileAppsPage;