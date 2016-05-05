define(['./add', './reduce'], function(add, reduce){
  var sum = function(arr){
    return reduce(arr, add);
  };

  return sum;
})
