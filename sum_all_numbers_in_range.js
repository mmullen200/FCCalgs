function sumAll(arr) {
  var newArr = [];

  var total = 0;
  
  var lowest = Math.min(arr[0], arr[1]);
  
  var highest = Math.max(arr[0], arr[1]);
  
  
  for (var i = lowest; i <= highest; i++) {
    newArr.push(i);
    
  }
  
  for (var j = 0; j < newArr.length; j++){
    total+=newArr[j];
  }

  
  return total;
  
}
sumAll([1, 4]);