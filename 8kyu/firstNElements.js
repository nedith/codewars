// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// Solution 1
function take(arr, n) {
  return arr.slice(0, n);
}

// Solution 2
const take = (arr, n) => arr.slice(0, n);
