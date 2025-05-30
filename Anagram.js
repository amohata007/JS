function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("cata", "atc"));

//Optimised Solution
function isOptAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(isOptAnagram("cre", "rey"));
