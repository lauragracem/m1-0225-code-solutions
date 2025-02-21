'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];
  let i = 0;
  for (i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
