//This will be a common module and we expect it
//to show up in the commons bundle

var React = require('react');

var Hero = React.createClass({
    displayName: 'Hero',
    render: function() {
        return (
            <div className="Hero">I'll Save You!</div>
        );
    }
});


module.exports = Hero;