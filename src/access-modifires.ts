export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  // returnしないのでコンストラクタは型指定いらない
  // 引数は指定できる
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    // クラスの中ならageを参照できる
    return 'name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスの初期化処理を実行する
    super(name, age, nationality);
  }
  profile():string {
    // this.age はprivateなので書けない
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 24, 'Japan');

console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
