define(['./reduce', './add'], function(reduce, add){
  sum =  function(arr){
    return reduce(arr, add);
  }

  return sum;
});
