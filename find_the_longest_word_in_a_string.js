function findLongestWord(str) {
  var strArray = [];
  var length;
  strArray = str.split(" ");
  length = strArray[0].length;
  for(var i = 1; i < strArray.length; i++){
    if (strArray[i].length > length) {
      length = strArray[i].length;
    }
  }
  
  
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");