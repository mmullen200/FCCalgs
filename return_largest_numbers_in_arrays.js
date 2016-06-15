function largestOfFour(arr) {
  var newArray = [];
  for (i = 0; i < 4; i++) {
    arr[i].sort(function(a, b){return a-b});
    console.log(arr[i]);
    newArray.push(arr[i][3]);
    console.log(newArray);
  }
  
  // You can do this!
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);