/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const newArray: unknown[] = [];
  let i = 0;
  for (i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
