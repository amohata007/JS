const arr = [2, 3, [4, 5, 6, [3, 2, [4]], 6], 9];

//Direct using Methods
console.log(arr.flat(Infinity));

//Using recursive approach
function flattenArr(arr, depth = Infinity) {
  const result = [];
  for (let ar of arr) {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...flattenArr(ar, depth - 1));
    } else {
      result.push(ar);
    }
  }
  return result;
}

console.log(flattenArr(arr)); //depth is optional
