'use strict';
/* exported reverse */
function reverse(array) {
  const newArray = [];
  let i = 0;
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
