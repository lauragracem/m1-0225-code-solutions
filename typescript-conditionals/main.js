'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const isUnderFive = (number) => {
  if (number < 5) {
    return true;
  }
  return false;
};
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const startsWithJ = (string) => {
  if (string.startsWith('J')) {
    return true;
  }
  return false;
};
const isOldEnoughToDrink = (person) => {
  if (person.age >= 21) {
    return true;
  }
  return false;
};
const isOldEnoughToDrive = (person) => {
  if (person.age >= 16) {
    return true;
  }
  return false;
};
const isOldEnoughToDrinkAndDrive = (person) => {
  if (person.age) {
    return false;
  }
  return false;
};
const categorizeAcidity = (pH) => {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 6) {
    return 'acid';
  } else if (pH >= 8 && pH <= 14) {
    return 'base';
  }
  return 'invalid pH level';
};
const introduceWarnerBro = (name) => {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
};
const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      return 'Fast and Furious';
    case 'comedy':
      return 'Jumpstreet 21';
    case 'horror':
      return 'The Crows';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'The Waitress';
    case 'sci-fi':
      return 'Interstellar';
  }
};
