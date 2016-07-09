function slasher(arr, howMany) {

  var newArr = arr.slice(howMany);


  // it doesn't always pay to be first
  console.log(newArr);
  return newArr;
}

slasher([1, 2, 3], 2);