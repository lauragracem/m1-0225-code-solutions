'use strict';
/* exported countdown */
function countdown(num) {
  const numArray = [];
  let i = 0;
  for (i = num; i >= 0; i--) {
    numArray.push(i);
  }
  return numArray;
}
