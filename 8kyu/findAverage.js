// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution 1
function findAverage(array) {
  // your code here
  return array.length > 0
    ? array.reduce((acc, c) => acc + c, 0) / array.length
    : 0;
}

// Solution 2
const find_average = (array) =>
  array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
