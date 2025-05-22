'use strict';
/* exported capitalize */
function capitalize(word) {
  const str = word.toLowerCase();
  const splitStr = str.split('');
  splitStr[0] = splitStr[0].toUpperCase();
  const join = splitStr.join('');
  return join;
}
