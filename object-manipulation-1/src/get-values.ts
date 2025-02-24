/* exported getValues */
function getValues(object: any): object[] {
  const valueArray: any[] = [];
  for (const key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
