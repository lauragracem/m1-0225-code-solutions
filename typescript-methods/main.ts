const heroes: string[] = [
  'Storm',
  'Ms Marvel',
  'Captain America',
  'Fantastic Four',
];

let randomNumber: number = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex: number = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log('randomHero: ', randomHero);

const library: object[] = [
  {
    title: 'Book 1',
    author: 'Jane Doe',
  },
  {
    title: 'Book 2',
    author: 'Jonathan Dorian',
  },
  {
    title: 'Book 3',
    author: 'Eleanor Riggbee',
  },
];

const lastBook = library.pop();
const firstBook = library.shift();

console.log('value of lastBook: ', lastBook);
console.log('value of firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of the library[]: ', library);

const fullName: string = 'LauraGrace DelaCruz';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName: ', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName: ', sayMyName);

const employee: object = {
  name: 'Emma',
  age: 3,
  position: 'Security Guard',
};

const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys: ', employeeKeys);

const employeeValues = Object.values(employee);
console.log('value of employeeValues: ', employeeValues);

const employeePairs = Object.entries(employee);
console.log('value of employeePairs: ', employeePairs);
