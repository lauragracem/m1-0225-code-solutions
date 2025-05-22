/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const index: number[] = [];
  let i = 0;
  for (i = 0; i <= array.length - 1; i++) {
    index.push(i);
  }
  return index;
}
