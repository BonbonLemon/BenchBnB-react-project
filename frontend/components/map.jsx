var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./../stores/bench'),
    ApiUtil = require('./../util/apiUtil');

var Map = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  _onChange: function () {
    var that = this;

    this.setState({benches: BenchStore.all()});

    this.markers.forEach(function (marker) {
      marker.setMap(null);
    });

    this.state.benches.forEach(function (bench) {
      var latLng = {lat: bench.lat, lng: bench.lng};

      var marker = new google.maps.Marker({
        position: latLng,
        map: that.map,
        title: 'Hello World!'
      });

      that.markers.push(marker);
    });

  },

  _onIdle: function () {
    var LatLngBounds = this.map.getBounds();
    var northEastLat = LatLngBounds.getNorthEast().lat();
    var northEastLng = LatLngBounds.getNorthEast().lng();
    var northEastBounds = {lat: northEastLat, lng: northEastLng};

    var southWestLat = LatLngBounds.getSouthWest().lat();
    var southWestLng = LatLngBounds.getSouthWest().lng();
    var southWestBounds = {lat: southWestLat, lng: southWestLng};

    ApiUtil.fetchBenches(northEastBounds, southWestBounds);
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.markers = [];
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', this._onIdle);
    BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    BenchStore.removeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Map;
