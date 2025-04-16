const convertMinutesToSeconds = function (minutes: number): number {
  return minutes * 60;
};

console.log('minutesToSeconds: ', convertMinutesToSeconds(2));

const greet = function (name: string): string {
  return 'Hello ' + name + '!';
};

console.log(greet('Eleanor'));

const getArea = (width: number, height: number): number => {
  return width * height;
};

console.log(getArea(2, 8));

interface Person {
  firstName: string;
  lastName: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};

console.log(getFirstName({ firstName: 'Joe', lastName: 'Dirt' }));

const getLastElement = (arr: any[]): any => {
  return arr[arr.length - 1];
};

console.log(getLastElement([4, 'five', 6, 'seven']));

const callOtherFunction = (otherFunction: Function, params: unknown): any => {
  return otherFunction(params);
};

console.log(callOtherFunction(greet, 'Sam'));
