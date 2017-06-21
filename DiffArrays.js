
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different
  
  /*
  Return a concatenation of both arrays
  Sort them then create a new array based on the criteria described bellow
  */
  return arr1.concat(arr2).sort().filter(function(element, index, arr) {
    
    /*Criteria
    Filter out all matching elements both from the beginning and the end of the
    array. All items left will be included into the new array.
    */
    newArr = arr.indexOf(element) == arr.lastIndexOf(element);
    
    return newArr;
  });
  
}

//Testing sample
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
