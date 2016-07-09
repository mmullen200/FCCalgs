
function whatIsInAName(collection, source) {
  // What's in a name?
  
  // Only change code below this line
  var myKeys = Object.keys(source);
  
  return collection.filter(function(obj){
    for (var i = 0; i < myKeys.length; i++){
      if (!obj.hasOwnProperty(myKeys[i]) || obj[myKeys[i]] !== source[myKeys[i]]){
        return false;
      }
    }
    
    return true;
    
  });
  
  
  // Only change code above this line
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
