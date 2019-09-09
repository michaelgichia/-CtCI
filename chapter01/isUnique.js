/**
 * Is Unique: Implement an algorithm to determine if a
 * string has all unique characters. What if you
 * cannot use additional data structures.
 */

const { assert } = require("../test");

function isUnique(string) {
  let counter = 0;
  let base = true;
  const alphabetSet = new Set();

  while (counter < string.length) {
    let letter = string[counter];
    if (alphabetSet.has(letter)) {
      base = false;
      break;
    } else {
      alphabetSet.add(letter);
    }
    counter += 1;
  }
  return base;
}

/* TESTS */
assert(isUnique('aabcd'), false);
assert(isUnique('abccd'), false);
assert(isUnique('bhjjb'), false);
assert(isUnique('mdjq'), true);
