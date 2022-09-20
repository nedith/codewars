// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// Solution 1
function sum(...arr) {
  return arr.reduce((acc, c) => acc + c, 0);
}

// Solution 2
function sum() {
  // return the sum of all arguments given.
  let total = 0;
  for (let i in arguments) {
    total += arguments[i];
  }
  return total;
}
