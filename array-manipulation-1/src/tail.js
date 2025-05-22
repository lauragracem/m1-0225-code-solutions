'use strict';
/* exported tail */
function tail(array) {
  const newArray = [];
  let i = 1;
  for (i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
