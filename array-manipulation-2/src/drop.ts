/* exported drop */
function drop(array: any[], count: number): any[] {
  const newArray: any[] = [];
  for (let i = count; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
