'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  const banned = [undefined, '', false, null, NaN, 0, -0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (banned.includes(array[i])) {
      // skip
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
