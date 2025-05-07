function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearInterval(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// A sample function to be debounced
function sayHello(name) {
  console.log("Hello,", name);
}

// Wrap it with debounce
const debouncedHello = debounce(sayHello, 1000);

// Simulate rapid calls
debouncedHello("Alice");
debouncedHello("Bob");
debouncedHello("Charlie");

// Only "Hello, Charlie" will be printed after 1 second,
// because the previous calls were cancelled.
