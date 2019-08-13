/*

Builds a final sorted array (or list) one item at a time.
Much less efficient on large lists.

Complexity:
  - Best: n
  - Worst: n^2

*/

const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
};

let array1 = [9, 2, 3, 1, 5, 4, 10];

console.log(insertionSort(array1));
