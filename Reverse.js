const arr = [1, 2, 3, 4, 5];

console.log(arr.reverse());

const str = "Hello world from Javascript";
console.log(str.split(" ").reverse().join(" ")); //Javascript from world Hello

const str_arr = str.split(" ");
let res = [];
for (let val of str_arr) {
  res.push(val.split("").reverse().join(""));
}
console.log(res.join(" ")); //olleH dlrow morf tpircsavaJ
