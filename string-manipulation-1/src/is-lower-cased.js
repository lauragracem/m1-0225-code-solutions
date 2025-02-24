'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const lower = word.toLowerCase();
  for (let i = 0; i <= lower.length - 1; i++) {
    if (word !== lower) {
      return false;
    }
  }
  return true;
}
