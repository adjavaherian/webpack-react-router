# webpack-react-router
example of webpack splitting with react and react-router

```
git clone https://github.com/adjavaherian/webpack-react-router
cd webpack-react-router/
npm install
rm -rf dist/* && webpack --display-error-details && node index.js
```

The following 'smoke tests' show that chunking is successful and vendor bundle contains the React module

```
adjavaherian@amir:~/Desktop/webpack-react-router$ grep -R Hero dist
dist/1.chunk.js:	var Hero = __webpack_require__(3);
dist/1.chunk.js:	            React.createElement(Hero, null)
dist/2.chunk.js:	var Hero = __webpack_require__(3);
dist/2.chunk.js:	            React.createElement(Hero, null),
dist/vendor.bundle.js:	var Hero = React.createClass({
dist/vendor.bundle.js:	    displayName: 'Hero',
dist/vendor.bundle.js:	            { className: 'Hero' },
dist/vendor.bundle.js:	module.exports = Hero;
adjavaherian@amir:~/Desktop/webpack-react-router$ grep -R zzz dist
dist/2.chunk.js:	            'zzzzzz'
adjavaherian@amir:~/Desktop/webpack-react-router$ grep -R React.version dist
dist/vendor.bundle.js:	React.version = '0.13.2';
```