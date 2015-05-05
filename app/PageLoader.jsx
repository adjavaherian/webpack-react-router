var React = require('react');

var FrontPage, MobileAppsPage = null;
var FrontPageStub = require('./pages/FrontPageStub.jsx');

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
            return <FrontPageStub />;
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


module.exports  = {
    FrontPage: FrontPageLoader,
    MobileAppsPage: MobileAppsPageLoader

};