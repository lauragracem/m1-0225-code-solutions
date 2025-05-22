/* exported getKeys */
function getKeys(object: any): any[] {
  const keyArray: any[] = [];
  for (const key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
