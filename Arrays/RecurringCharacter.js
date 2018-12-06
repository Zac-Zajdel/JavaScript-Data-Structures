// O(n^2) not efficient enough. NOOB
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}
console.log(firstRecurringCharacter([1, 2, 3, 1, 5, 6, 7, 8, 1, 10]));

// O(n)
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter2([1, 2, 3, 1, 5, 6, 7, 8, 1, 10]));