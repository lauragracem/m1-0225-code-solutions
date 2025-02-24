/* exported chunk */
function chunk(array: any[], size: number): any[] {
  const newArray: any[][] = [];
  for (let i = 0; i <= array.length - 1; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
