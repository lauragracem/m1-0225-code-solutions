'use strict';
const convertMinutesToSeconds = function (minutes) {
  return minutes * 60;
};
console.log('minutesToSeconds: ', convertMinutesToSeconds(2));
const greet = function (name) {
  return 'Hello ' + name + '!';
};
console.log(greet('Eleanor'));
const getArea = (width, height) => {
  return width * height;
};
console.log(getArea(2, 8));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(getFirstName({ firstName: 'Joe', lastName: 'Dirt' }));
const getLastElement = (arr) => {
  return arr[arr.length - 1];
};
console.log(getLastElement([4, 'five', 6, 'seven']));
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
console.log(callOtherFunction(greet, 'Sam'));
