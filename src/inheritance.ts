export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return `I can run`;
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    // 親クラスの初期化を再利用
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${parentMessage} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('hayashi').run());
console.log(new Lion('hayashi', 90).run());
