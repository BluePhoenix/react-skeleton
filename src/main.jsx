// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');

var ListA = require('./components/List.jsx');

ReactDOM.render(<ListA />, document.getElementByID('ingredients'));
