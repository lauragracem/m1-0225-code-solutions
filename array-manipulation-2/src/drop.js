'use strict';
/* exported drop */
function drop(array, count) {
  const newArray = [];
  for (let i = count; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
