/**
 * Immplement a  functiom to freeze deeply nested object.
 *
 * I: Objects
 * O: Freezed object
 * E: Nested object of unknown depth.
 * C: Optimize
 * time complexity:
 * space complexity: constant
 *
 */

const { assert } = require("../test");

function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function(prop) {
    if (
      obj.hasOwnProperty(prop) &&
      obj[prop] !== null &&
      (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });
}

// Test
const person = {
  name: {
    firstName: "Michael",
    lastName: "Gichuru",
    surname: "Gichia",
    family: {
      familyName: {
        clanName: "Gichuru"
      }
    }
  }
};

deepFreeze(person);

person.name.family.familyName.clanName = "Mumbi";

assert((() => person.name.family.familyName.clanName)() === "Gichuru", true);
