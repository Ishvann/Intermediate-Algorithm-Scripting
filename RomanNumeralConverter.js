function convertToRoman(num) {
  
  //Create array that contains roman values
  var romanValues = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
  
  //Condition, if the value in num is less than or equal to zero, return an empty string 
  if (num <= 0) {
    return '';
  }
  
  /*Else, run a loop through the array created above
  */
  for (var i = 0; i < romanValues.length; i++) {
    /*Condition, if the value in num is greater or equal to the value
  inside array the element in the array:
    */
    if (num >= romanValues[i][0]) {
      
      //Return letter for numeric value
       
      return romanValues[i][1] + convertToRoman(num - romanValues[i][0]);
    }
  }

}

//Test material:
convertToRoman(36);
convertToRoman(3);
convertToRoman(-3);
convertToRoman(29);
convertToRoman(40);
convertToRoman(16);
convertToRoman(97);
convertToRoman(500);
convertToRoman(499);
convertToRoman(1023);
convertToRoman(3999);
