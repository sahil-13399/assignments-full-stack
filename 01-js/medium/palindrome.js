/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replaceAll(",","")
  str = str.replaceAll("!","")
  str = str.replaceAll("?","")
  str = str.replaceAll(".","")
  str = str.replaceAll(" ","")
  console.log(str)
  return str.toLowerCase() === reverse(str).toLowerCase();
}

const reverse = str => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse(); 
  return reverseArray.join("");
};

console.log(isPalindrome("Able, was I ere I saw Elba!"))

module.exports = isPalindrome;
