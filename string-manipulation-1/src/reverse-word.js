'use strict';
/* exported reverseWord */
function reverseWord(word) {
  const wordArray = [];
  for (let i = word.length - 1; i >= 0; i--) {
    wordArray.push(word[i]);
  }
  return wordArray.join('');
}
