const number: number = 9200;
const street: string = 'Irvine Center Drive';
const address: string = number + ' ' + street;

const interpolatedString: string = `LearnFuze:${address}`;

console.log(interpolatedString);

const firstName: string = 'Uzair';
const lastName: string = 'Ashraf';
const age: number = 25;

const bio: string =
  'My name is ' +
  firstName +
  ' ' +
  lastName +
  ' and I am ' +
  age +
  ' years old.';

const interpolatedString1: string = `Bio: ${bio}`;

console.log(interpolatedString1);

const fruit: string = 'apple';
const item: string = 'pen';

const interpolatedString2: string = `I have a ${item}`;
const interpolatedString3: string = `I have an ${fruit}`;

console.log(interpolatedString2);
console.log(interpolatedString3);
console.log(`${fruit}${item}`);
