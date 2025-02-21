/* exported reverse */
function reverse(array: any[]): any[] {
  const newArray: any[] = [];
  let i = 0;
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
