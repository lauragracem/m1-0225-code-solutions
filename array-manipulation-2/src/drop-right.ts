/* exported dropRight */
function dropRight(array: any[], count: number): any[] {
  if (count > array.length) {
    return [];
  }
  const newArray: any[] = [];
  for (let i = 0; i <= array.length - count - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
