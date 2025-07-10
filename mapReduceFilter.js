const arr = [1, 2, 3, 4, 5];

//map
const mapArr = arr.map((e) => e * 2);
// won't change original array
console.log(mapArr); // [2,4,6,8,10]

const objArr = [{ a: 1 }, { a: 2 }];
const mapped = objArr.map((e) => e);

mapped[0].a = 100;
console.log(objArr[0].a); // 100 — original is modified!

//filter
const filterArr = arr.filter((e) => e % 2 == 0);
console.log(filterArr); //[2,4];

//reduce
const reduceArr = arr.reduce((acc, curr) => acc + curr);
console.log(reduceArr); //15
