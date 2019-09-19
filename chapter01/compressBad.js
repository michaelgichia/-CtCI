/**
 * Immplement a  method to perform a simple string compression
 * using the counts of repeated characters.
 *
 * I: string
 * O: Compressed string
 * E: If the comprossed string is equal to the string then return the string.
 * C: Optimize
 * time complexity: linear
 * space complexity: constant
 *
 */

const { assert } = require("../test");

function compressBad(str) {
  let counter = 1;
  let compressString = '';
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str[i + 1];

    if (current === next) {
      counter++
    } else {
      compressString += current + counter;
      counter = 1;
    }
  }
  return compressString.length === str.length ? str : compressString;
}

 // Test
assert(compressBad('aabcccccaaa') === 'a2b1c5a3', true);
assert(compressBad('aabcccccaaa') === 'a2b1c5a2', false);
