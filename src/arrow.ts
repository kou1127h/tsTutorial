export {};

let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => weight / height ** 2;

console.log(bmi(1.6, 33));
