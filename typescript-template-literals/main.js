'use strict';
const number = 9200;
const street = 'Irvine Center Drive';
const address = number + ' ' + street;
const interpolatedString = `LearnFuze:${address}`;
console.log(interpolatedString);
const firstName = 'Uzair';
const lastName = 'Ashraf';
const age = 25;
const bio =
  'My name is ' +
  firstName +
  ' ' +
  lastName +
  ' and I am ' +
  age +
  ' years old.';
const interpolatedString1 = `Bio: ${bio}`;
console.log(interpolatedString1);
const fruit = 'apple';
const item = 'pen';
const interpolatedString2 = `I have a ${item}`;
const interpolatedString3 = `I have an ${fruit}`;
console.log(interpolatedString2);
console.log(interpolatedString3);
console.log(`${fruit}${item}`);
