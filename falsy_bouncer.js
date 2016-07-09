function bouncer(arr) {
  
  var newArr = arr.filter(function(val){
    if (val !== false && val !== null && val !== 0 && val !== "" && val !== undefined && Number.isNaN(val) ===false) {
      return true;
    }
    return false;
  });
  
  // Don't show a false ID to this bouncer.
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
