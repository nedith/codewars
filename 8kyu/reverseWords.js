// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Solution 1
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// Solution 2
function reverseWords(str) {
  let reverse = [];
  let words = str.split(' ');
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i]);
  }
  return reverse.join(' ');
}