//currying

function outer(a) {
  return function inner(b) {
    return a * b;
  };
}

console.log(outer(5)(7));

//Infinite Currying

function outer(a) {
  return function inner(b) {
    if (b) {
      return outer(a + b);
    } else {
      return a;
    }
  };
}
console.log(outer(5)(7)(16)());
