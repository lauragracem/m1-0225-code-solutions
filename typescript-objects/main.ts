interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Laura Grace',
  lastName: 'Dela Cruz',
  age: 36,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Speech Assistant';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);
console.log('type of student: ', typeof student);

const vehicle: Vehicle = {
  make: 'Acura',
  model: 'TSX',
  year: 2011,
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'silver';

console.log('value of vehicle: ', vehicle);
console.log('type of vehicle: ', typeof vehicle);

const pet: Pet = {
  name: 'Eleanor',
  kind: 'Golden Doodle',
};

delete pet.name;
delete pet['kind'];
console.log('value of pet: ', pet);
console.log('type of pet: ', typeof pet);
