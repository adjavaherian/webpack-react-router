webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//This should be in its own bundle

	'use strict';

	var React = __webpack_require__(4);
	var Hero = __webpack_require__(5);

	var FrontPage = React.createClass({
	    displayName: 'FrontPage',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'FrontPage' },
	            React.createElement(Hero, null)
	        );
	    }
	});

	module.exports = FrontPage;

/***/ }
]);