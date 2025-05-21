//Normal Approach

function fib(num) {
  let a = 0;
  let b = 1;
  let res = [a, b];
  for (let i = 2; i <= num; i++) {
    res.push(a + b);
    [a, b] = [b, a + b];
  }
  return res;
}

console.log(fib(10));

//Using Recursion

function recFib(num) {
  if (num <= 1) return num;
  return recFib(num - 1) + recFib(num - 2);
}

console.log(recFib(10)); //55

//for full list
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function showFibonacciSeries(n) {
  const series = [];
  for (let i = 0; i <= n; i++) {
    series.push(fib(i));
  }
  console.log(series);
}

showFibonacciSeries(10); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
