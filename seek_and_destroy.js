function destroyer(arr) {
  // Remove all the values
  
  // This empty array will include the values outside the initial arr argument.
  var toDestroy = [];
  
  // In this for loop, we push values after the initial arr array
  // into the toDestroy array. In the current example, the array will
  // be [2, 3]
  for (var i = 1; i < arguments.length; i++) {
    toDestroy.push(arguments[i]);
  }
  
  // The survivors variable will hold the values that do not match
  // the values in toDestroy
  var survivors = arguments[0].filter(function(element, index){
    var keepers = true;
    
    for (var i = 0; i < toDestroy.length; i++) {
      if (element === toDestroy[i]) {
        keepers = false;
      }
    }
    return keepers;
    
  });
  
  return survivors;
  
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);