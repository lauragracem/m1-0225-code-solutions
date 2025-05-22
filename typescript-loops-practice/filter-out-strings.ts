/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  let i = 0;
  for (i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
