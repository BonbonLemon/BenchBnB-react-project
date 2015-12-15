var React = require('react'),
    BenchStore = require('./../stores/bench'),
    ApiUtil = require('./../util/apiUtil');

var Index = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()})
  },

  componentDidMount: function () {
    BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },

  componentWillUnmount: function () {
    BenchStore.removeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        {
          this.state.benches.map(function (bench, idx) {
            return (
              <div key={idx}>
                <br/>
                Latitude: {bench.lat}
                <br/>
                Longitude: {bench.lng}
                <br/>
                Description: {bench.description}
                <br/>
              </div>
            );
          })
        }
      </div>
    )
  }
});

module.exports = Index;
