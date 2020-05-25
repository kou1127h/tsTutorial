export {};

class Person {
  // public name: string;
  // protected age: number;

  // これで初期化が済む
  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('hayashi', 24);
console.log(me);
