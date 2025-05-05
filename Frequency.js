let arr = ["d", "a", "a", "b", "a", "b", "b", "c", "c", "b", "c", "c", "c"];

let freqCount = {};
for (let ar of arr) {
  if (freqCount[ar]) {
    freqCount[ar]++;
  } else {
    freqCount[ar] = 1;
  }
}

console.log(freqCount); //{ d: 1, a: 3, b: 4, c: 5 }
console.log(Object.keys(freqCount)); //[ 'd', 'a', 'b', 'c' ]
console.log(Object.values(freqCount)); //[ 1, 3, 4, 5 ]
console.log(Object.entries(freqCount)); //[ [ 'd', 1 ], [ 'a', 3 ], [ 'b', 4 ], [ 'c', 5 ] ]

//Object.fromEntries() converts an array of key-value pairs back into an object.
let sortedResult = Object.fromEntries(Object.entries(freqCount).sort());

console.log(sortedResult); //{ a: 3, b: 4, c: 5, d: 1 }
