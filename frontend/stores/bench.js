//stores/bench.js
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _benches = [];
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants.js');

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function(benches){
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};


window.BenchStore = BenchStore;

module.exports = BenchStore
