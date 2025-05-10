/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const upper: string = word.toUpperCase();
  for (let i = 0; i <= upper.length - 1; i++) {
    if (word !== upper) {
      return false;
    }
  }
  return true;
}
