function convertToRoman(num){
  var finalRoman = "";
  var numberPlaces = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (var i = 0; i < numberPlaces.length; i++) {
    while (num >= numberPlaces[i]) {
      finalRoman+=romanNumerals[i];
      num-=numberPlaces[i];
      console.log(num);
    }
  }
  console.log(finalRoman);
  return finalRoman;
  
  
}

convertToRoman(3999);