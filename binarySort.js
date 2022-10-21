/*
    This code by Hossanadev logs to the console the index
    of only sorted arrays, passed into it as an argument.

    This is the binary sort method, and works with
    a time complexity of O(log n).
*/

const binarySort = (sortedArray, element) => {
  let a = 0;
  let z = sortedArray.length - 1;
  while (a <= z) {
    let mid = Math.floor((a + z) / 2);
    if (sortedArray[mid] == element) {
      return mid;
    } else if (sortedArray[mid] > element) {
      z = mid - 1;
    } else {
      a = mid + 1;
    }
  }
  return `Oops! ${element} is not an element of the array.`;
};

const check = binarySort([10, 11, 12, 23, 78, 104], 23); // Note: the array passed in must be sorted already for this code to work!
console.log(check);

/* If you cannot sort arrays, check my repo for the code that sorts and arranges elements in arrays */