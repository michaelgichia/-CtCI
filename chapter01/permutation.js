/**
 * Given two strings, write a method to decide if
 * one is a permutation of the other.
 */

const { assert } = require("../test");

function permutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

// Tests
assert(permutation('aba', 'aab'), true);
assert(permutation('aba', 'aaba'), false);
assert(permutation('aba', 'aa'), false);