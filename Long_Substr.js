function check(s) {
  let arr = [];
  let max = 0;

  for (let ch of s) {
    if (arr.includes(ch)) {
      arr = arr.slice(arr.indexOf(ch) + 1);
    }
    arr.push(ch);
    if (arr.length > max) max = arr.length;
  }

  return max;
}

console.log(check("dvdf"));
