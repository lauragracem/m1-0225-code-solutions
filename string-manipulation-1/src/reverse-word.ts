/* exported reverseWord */
function reverseWord(word: string): string {
  const wordArray: string[] = [];
  for (let i = word.length - 1; i >= 0; i--) {
    wordArray.push(word[i]);
  }
  return wordArray.join('');
}
