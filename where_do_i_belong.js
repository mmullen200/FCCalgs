function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var placeInArray = 0;
  
  arr.sort(function(a, b){return a-b;});
  console.log(arr);
  
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num && arr[i + 1] > num){
      placeInArray = i + 1;
    } else if (num === arr[i]) {
      placeInArray = i;
    } else if (num > arr[arr.length - 1]) {
      placeInArray = arr.length;
    }
  }
  
  
  console.log(placeInArray);
  return placeInArray;
}

getIndexToIns([40, 60], 50);