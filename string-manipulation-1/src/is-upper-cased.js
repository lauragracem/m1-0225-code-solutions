'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const upper = word.toUpperCase();
  for (let i = 0; i <= upper.length - 1; i++) {
    if (word !== upper) {
      return false;
    }
  }
  return true;
}
