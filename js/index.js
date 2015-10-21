require('../sass/main.scss');

var React = require('react');

// index.js - root component for application bundle
// App - main react component
var App = require('./App.js');

window.total = 0;

React.render(<App />, document.body); 