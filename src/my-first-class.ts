export {};

class Person {
  name: string;
  age: number;
  // returnしないのでコンストラクタは型指定いらない
  // 引数は指定できる
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 24);

console.log(taro.profile());
