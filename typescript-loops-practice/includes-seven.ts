/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  let i = 0;
  for (i = 0; i <= array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
