/* exported findIndex */
function findIndex(array: any[], value: any): any {
  let i = 0;
  for (i = 0; i <= array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
