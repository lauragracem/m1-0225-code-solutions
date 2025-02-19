/* exported sumAll */
function sumAll(numbers: number[]): number {
  let sum = 0;
  for (const value of numbers) {
    sum += value;
  }
  return sum;
}
