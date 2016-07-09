function confirmEnding(str, target){
  console.log(str.substr((str.length - target.length), str.length - 1));

  if(target === str.substr((str.length - target.length), str.length - 1)) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("He has to give me a new name", "me")