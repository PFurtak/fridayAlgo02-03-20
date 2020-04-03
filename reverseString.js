// 3. Write a function to reverse a string (provided as an argument)

// using helpers
function reverse(stringOne) {
  return stringOne.split('').reverse().join('');
}

// for of loop
function reverse(str) {
  let reversed = '';
  for (character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
