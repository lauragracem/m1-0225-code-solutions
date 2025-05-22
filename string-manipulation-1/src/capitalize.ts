/* exported capitalize */
function capitalize(word: string): string {
  const str = word.toLowerCase();
  const splitStr: string[] = str.split('');
  splitStr[0] = splitStr[0].toUpperCase();
  const join: string = splitStr.join('');
  return join;
}
