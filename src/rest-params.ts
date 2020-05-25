export {};

const reducer = (a: number, c: number): number => {
  console.log({ a, c });
  return a + c;
};
const sum: (...values: number[]) => number = (...values: number[]): number => {
  // console.log(values);
  return values.reduce(reducer);
};

console.log(sum(1, 3, 4, 5));

// [1, 3, 4].reduce(reducer);
