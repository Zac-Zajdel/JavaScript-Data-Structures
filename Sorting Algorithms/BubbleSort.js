/*

Sometimes referred to as sinking sort.
Compares are each pair of adjacent items and swaps them if they are not in the correct order.
Pass through the list until no swaps are needed.

Complexity:
  - Best: n
  - Worst: n^2

*/

const bubbleSort = array => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

let array1 = [10, 5, 1, 2, 9];
let array2 = [1, 2, 3, 4, 5];
let array3 = [20, 10, 0, -5];

console.log(bubbleSort(array1));
console.log(bubbleSort(array2));
console.log(bubbleSort(array3));
