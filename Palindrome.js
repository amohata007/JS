// x = 121
// y = 10

function isPalindrome(wordNum) {
  const str = wordNum.toString(); //if the input is number it will convert in string
  return str < 0 ? false : str === str.split("").reverse().join("");
}

console.log(isPalindrome("abhihba"));

//string to number ==
console.log(+"123");

//+true       // 1
//+false      // 0
//+null       // 0
//+undefined  // NaN
//+"123abc"   // NaN
//+""         // 0
