const colors: string[] = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[0]: ', colors[1]);
console.log('value of colors[0]: ', colors[2]);

const color1: string = colors[0];
const color2: string = colors[1];
const color3: string = colors[2];
const americaIs: string = `America is ${color1}, ${color2}, ${color3}`;
console.log(americaIs);

colors[2] = 'green';

const newColor1: string = colors[0];
const newColor2: string = colors[1];
const newColor3: string = colors[2];
const mexicoIs: string = `Mexico is ${newColor1}, ${newColor2}, ${newColor3}`;
console.log(mexicoIs);

console.log('value of colors: ', colors);
console.log('type of colors: ', typeof colors);
