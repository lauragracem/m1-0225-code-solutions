'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (const value of numbers) {
    sum += value;
  }
  return sum;
}
