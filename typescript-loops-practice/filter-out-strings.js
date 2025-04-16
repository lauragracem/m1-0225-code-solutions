'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  let i = 0;
  for (i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
