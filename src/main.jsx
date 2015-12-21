// Main entry point for the application
var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./components/List.jsx');

ReactDOM.render(<List />, document.getElementByID('ingredients'));
