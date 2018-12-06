//Create a function that reverses a string.

// #1 - For Loop
const reverse = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
console.log(reverse("Hello World"));

// #2 - for of loop
const reverse = (string) => {
  let reversed = "";
  for (let char of string) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverse("Hello World"));

// #3 - Reverse() method
// Calling split("") on word "Hello" produces H,e,l,l,o.
// reverse() reverses all items in the array.
// join() rejoins all items in an array into a string and returns that string.
const reverse = (string) => {
  return string.split("").reverse().join("");
}
console.log(reverse("Hello World"));

// #4 - Using recursion
const reverse = (string) => {
  if (string === "") {
    return "";
  } else {
    return reverse(string.substr(1)) + string[0];
  }
}
console.log(reverse("Hello World"));