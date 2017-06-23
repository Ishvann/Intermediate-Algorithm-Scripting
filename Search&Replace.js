function myReplace(str, before, after) {
  
  // Find index where before is on string
  var index = str.indexOf(before);
  // If the word current word has a capitalized first letter
  if (str[index] === str[index].toUpperCase()) {
    /* If condition above is true
    Change the contents of variable "after" so that it has now the first letter       capitalzied*/
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // If not true, then just replace the current word by the new word
  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
