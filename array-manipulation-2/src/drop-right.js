'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count > array.length) {
    return [];
  }
  const newArray = [];
  for (let i = 0; i <= array.length - count - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
