function reverseString(str) {
  var newArray = str.split("");
  
  var reverseArray = newArray.reverse();
  
  var finalArray = reverseArray.join("");
  
  
  
  return finalArray;
}

reverseString("hello");
