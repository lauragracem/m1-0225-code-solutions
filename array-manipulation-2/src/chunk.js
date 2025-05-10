'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
