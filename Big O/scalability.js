// O(n) -> Dependent on the size of the array changing the # of operations.
const nemo = ['nemo'];
const large = new Array(100).fill('nemo');
function findNemo(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] == 'nemo') {
      console.log("Found Nemo!")
    }
  }
}

// cost findNemo2 = array => {
//   array.forEach(i => {
//     if(i == 'nemo') {
//       console.log("Found nemo!");
//     }
//   })
// }

findNemo(large);

// O(1) because the # of operations will not change. Always only happening once.
const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

const boxes1 = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i  = 0; i < array.length; i++) {
     for (let j = 0; j < array.length; j++) {
        console.log(array[i], array[j]);
     }
  }
}

logAllPairsOfArray(boxes1);