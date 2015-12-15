//util/api_util.js
var ApiActions = require('./../actions/api_actions.js')

var ApiUtil = {
  fetchBenches: function(northEastBounds, southWestBounds) {
    //make an api call using AJAX in here
    var that = this;

    $.ajax({
      url: "/api/benches",
      method: "GET",
      data: {bounds: {northEast: northEastBounds, southWest: southWestBounds}},
      success: function (benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
