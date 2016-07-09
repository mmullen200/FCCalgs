
function chunkArrayInGroups(arr, size) {
  
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var piece = arr.slice(i, size);
    console.log(piece);

  }



  

  console.log(newArr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
