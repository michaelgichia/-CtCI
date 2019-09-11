/**
 * Write a method to replace all spaces in a string with '%20:
 * You may assume that the string has sufficient space at the
 * end to hold the additional characters, and that you are given the "true"
 * length of the string.
 * (Note: If implementing in Java, please use a character array so
 * that you can perform this operation in place.)
 *
 * constrains: We can have multiple spaces between letters
*/

const { assert } = require('../test');

function urlify(str) {
  const urlfiedStr = [];
  let counter = 0;
  const trimmedString = str.trim()

  while (counter < trimmedString.length) {
    let letter = trimmedString[counter];
    if (letter === ' ') {
      if (trimmedString[counter - 1] !== ' ') {
        urlfiedStr.push('%20');
      }
    } else {
      urlfiedStr.push(letter);
    }
    counter++;
  }
  return urlfiedStr.join('');
}

// Tests
assert(urlify("Mr John     Smith J 13"), "Mr%20John%20Smith%20J%2013")
assert(urlify("mynameismichael"), "mynameismichael")
assert(urlify("   mynameis   michael"), "mynameis%20michael")
