/* exported initial */
function initial(array: any[]): any[] {
  const newArray: any[] = [];
  let i = 0;
  for (i = 0; i <= array.length - 2; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
