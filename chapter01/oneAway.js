/**
 * One Away
 *
 * Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * There are three types of edits that can be performed on strings:
 * - insert a character
 * - remove a character
 * - replace a character
 *
 * EXAMPLE:
 * pale, ple --> true
 * pales, pale --> true
 * pale, bale --> true
 * pale, bake --> false
 *
 * I: two strings
 * O: boolean
 * E: empty, null strings
 * C: Optimize
 *
 * */

const { assert } = require("../test");

function sortString(str) {
  return str
    .split("")
    .sort()
    .join("");
}

function oneEditAway(s1, s2) {
  const stringOne = sortString(s1);
  const stringTwo = sortString(s2);
  if (stringOne === stringTwo) {
    return true;
  }

  let value = true;
  let maxEdits = 1;

  const [longestString, shortestString] = stringOne.length > stringTwo.length ? [stringOne, stringTwo] : [stringTwo, stringOne];

  if (
    longestString.length === shortestString.length ||
    longestString.length - 1 === shortestString.length
  ) {
    for (let index = 0; index < shortestString.length; index++) {
      if (!shortestString.includes(longestString[index])) {
        maxEdits--;
      }
      if (maxEdits < 0) {
        value = false;
      }
    }
  } else {
    value = false;
  }
  return value;
}

assert(oneEditAway("pale", "pale"), true);
assert(oneEditAway("pale", "elap"), true);
assert(oneEditAway("pale", "bale"), true);
assert(oneEditAway("pales", "pale"), true);
assert(oneEditAway("plmfklale", "bale"), false);
assert(oneEditAway("dale", "bake"), false);
assert(oneEditAway("pale", "bake"), false);

