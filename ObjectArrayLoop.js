function whatIsInAName(collection, source) {
  
  //Declare variable that contains object info for search
  var keyMatches = Object.keys(source);

  // Filter through array collection
  return collection.filter(function (obj) {
    
    //Loop through collections to find a matching key
    for(var i = 0; i < keyMatches.length; i++) {
      //if the object being tested has the same property or is not equal to source then return false, else return true
      if(!obj.hasOwnProperty(keyMatches[i]) || obj[keyMatches[i]] !== source[keyMatches[i]]) {
        return false;
      }
    }
    return true;
  });
  
}

//Test samples
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
