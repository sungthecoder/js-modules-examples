var reduce = require('./reduce');
var add = require('./add');

module.exports = function(arr){
  return reduce(arr, add);
};
