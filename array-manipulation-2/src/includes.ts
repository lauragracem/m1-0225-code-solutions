/* exported includes */
function includes(array: any[], value: any): boolean {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
