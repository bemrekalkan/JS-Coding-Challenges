//? created a function that take a string and reverse it.

function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

console.log(reverseWords("This is the first coding challenge."));
//! output: 'sihT si eht tsrif gnidoc .egnellahc'
