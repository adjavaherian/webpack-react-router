var React = require('react');

var TestClass = React.createClass({
    displayName: 'TestClass',
    componentDidMount: function(){
        console.log('test class mounted');
    },
    render: function() {
        return (
            <div className="TestClass">zzzzzz</div>
        );
    }
});


module.exports = TestClass;