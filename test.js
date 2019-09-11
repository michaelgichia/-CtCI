function assert(result, expected) {
  if (result !== expected) {
    console.error(`Expected: ${expected}`)
    console.error(`Result: ${result}`)
    console.error('✕ Oh my 🤦, you can do better! ');
  } else {
    console.log("✓ Sheesh, don't let it get to your head!");
  }
};

module.exports = { assert };