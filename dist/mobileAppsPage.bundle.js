webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var Hero = __webpack_require__(5);
	var TestClass = __webpack_require__(6);

	var MobileAppsPage = React.createClass({
	    displayName: 'MobileAppsPage',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'MobileAppsPage container' },
	            React.createElement(Hero, null),
	            React.createElement(TestClass, null)
	        );
	    }
	});

	module.exports = MobileAppsPage;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var TestClass = React.createClass({
	    displayName: 'TestClass',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'TestClass' },
	            'zzzzzz'
	        );
	    }
	});

	module.exports = TestClass;

/***/ }
]);