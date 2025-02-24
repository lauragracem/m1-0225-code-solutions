/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}
