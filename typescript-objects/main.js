'use strict';
const student = {
  firstName: 'Laura Grace',
  lastName: 'Dela Cruz',
  age: 36,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Speech Assistant';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);
console.log('type of student: ', typeof student);
const vehicle = {
  make: 'Acura',
  model: 'TSX',
  year: 2011,
};
vehicle['isConvertible'] = false;
vehicle['color'] = 'silver';
console.log('value of vehicle: ', vehicle);
console.log('type of vehicle: ', typeof vehicle);
const pet = {
  name: 'Eleanor',
  kind: 'Golden Doodle',
};
delete pet.name;
delete pet['kind'];
console.log('value of pet: ', pet);
console.log('type of pet: ', typeof pet);
