/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const lower: string = word.toLowerCase();
  for (let i = 0; i <= lower.length - 1; i++) {
    if (word !== lower) {
      return false;
    }
  }
  return true;
}
