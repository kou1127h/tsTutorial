export {};

let fooCompatible: any;
let barCompatible: string = 'TS';
console.log(typeof fooCompatible);
fooCompatible = barCompatible;

// anyでもstringを代入するとstringになる
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性がないのでそもそも代入できない
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1946 = 1946;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Preson {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Preson(43, 'hayashi');
