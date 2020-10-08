// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
// Value of a should be 6, after swapping.
// Value of b should be 8, after swapping.
// You should use array destructuring to swap a and b.
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];





// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
// arr should be [3,4,5,6,7,8,9,10]
// source should be [1,2,3,4,5,6,7,8,9,10]
// Array.slice() should not be used.
// Destructuring on list should be used.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  const [a, b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
