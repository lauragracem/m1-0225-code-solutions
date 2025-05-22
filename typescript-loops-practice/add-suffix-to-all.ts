/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray: string[] = [];
  let i = 0;
  for (i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
