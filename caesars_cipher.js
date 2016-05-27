function rot13(str) { // LBH QVQ VG!
  var letterArray = str.split("");
  var decodedPhrase;
  var newLetterArray = [];
  
  for (var i = 0; i < letterArray.length; i++){
    letterCode = letterArray[i].charCodeAt();
    console.log(letterCode);
    
    if (letterCode < 65) {
      letterCode = String.fromCharCode(letterCode);
      newLetterArray.push(letterCode);
    } else {
      decodedLetter = ((letterCode - 65) + 13)%26;
      decodedLetter +=65;
      decodedLetter = String.fromCharCode(decodedLetter);
      newLetterArray.push(decodedLetter);
      console.log(newLetterArray);
    }
    decodedPhrase = newLetterArray.join("");
    console.log(decodedPhrase);
  
  }
  return decodedPhrase;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");