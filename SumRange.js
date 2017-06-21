function sumAll(arr) {
  
  //Find the max value within the array
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
  //Find the min value within the array
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
  //Create new array to store new values
  var newArr = [];
  
  /*Using min & max as parameters us a loop to create "push" value into the new     array*/
  for (i = min; i <= max; i++) {
    newArr.push(i);
    
  }
  
  //Sum the range of value within the new array and return the sum
  var sum = newArr.reduce(function(a, b) { return a + b; }, 0);
  return sum;

 
}
//Test series
sumAll([4, 1]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
