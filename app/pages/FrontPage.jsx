//This should be in its own bundle

var React = require('react');
var Hero = require('../modules/Hero');

var FrontPage = React.createClass({
    displayName: 'FrontPage',
    render: function() {
        return (
            <div className="FrontPage">
                <Hero />
            </div>
        );
    }
});


module.exports = FrontPage;