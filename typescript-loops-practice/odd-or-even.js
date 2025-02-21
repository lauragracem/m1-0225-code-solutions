'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const newArray = [];
  let i = 0;
  for (i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
