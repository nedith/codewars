// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// Solution
function copySorted(arr) {
  arr = ["HTML", "JavaScript", "CSS"];
  // console.log(arr)
  return arr.slice().sort()
}
// console.log(copySorted(["HTML", "JavaScript", "CSS"]))
