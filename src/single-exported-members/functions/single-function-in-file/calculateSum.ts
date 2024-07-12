export const calculateSum = (numbers: number[]): number =>
  numbers.reduce((acc, next) => acc + next, 0);
