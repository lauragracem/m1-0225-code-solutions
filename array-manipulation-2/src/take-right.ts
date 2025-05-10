/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  if (count > array.length) {
    return array;
  }
  const newArray: any[] = [];
  for (let i = array.length - count; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
