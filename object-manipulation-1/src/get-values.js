'use strict';
/* exported getValues */
function getValues(object) {
  const valueArray = [];
  for (const key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
