var React = require('react'),
    ReactDOM = require('react-dom'),
    apiUtil = require('./util/apiUtil'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    Index = require('./components/index'),
    Map = require('./components/map'),
    Search = require('./components/search');

window.BenchStore = require('./stores/bench')
// var apiUtil = require('./util/apiUtil.js');

document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Search />, root);
});
