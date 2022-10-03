// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
// Array/list size is at least 3 .

// In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

// Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).

// Input >> Output Examples:
// pendulum ([6, 6, 8 ,5 ,10]) ==> [10, 6, 5, 6, 8]
// Explanation:
// Since , 5 is the The Smallest element of the list of integers , came in The center position of array/list

// The Higher than smallest is 6 goes to the right of 5 .

// The Next higher number goes to the left of minimum number and So on .

// Remember , Duplications are included when Arranging , Don't Delete Them .


// Solution 1
const pendulum = (values) =>
  values
    .sort((a, b) => a - b)
    .reduce((pre, val) => (pre.length % 2 ? [...pre, val] : [val, ...pre]), []);

// Solution 2 
function pendulum(values, l = values.length) {
  values.sort((min, max) => max - min);
  const arr = [];
  for (let i = 0; i < l; i++) {
    if (i % 2 === 0) {
      arr.unshift(values.pop());
    } else {
      arr.push(values.pop());
    }
  }
  return arr;
}



