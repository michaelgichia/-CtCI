function assert(expected, result) {
  if (result !== expected) {
    console.error('✕ Oh my 🤦, you can do better! ');
  } else {
    console.log("✓ Sheesh, don't let it get to your head!");
  }
};

module.exports = { assert };