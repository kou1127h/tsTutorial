export {};

class MyNumberCard {
  // 変更できなくするため
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // privateなのでアクセスできなくなった件への解決
  get owner() {
    return this._owner;
  }
  // privateでも変更できる
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('hayshi', 1234567890);
console.log(card.debugPrint());

card.secretNumber = 111111111;
// 変更はできない
// card.owner = '林';
// 参照はできる
console.log(card.owner);

console.log(card.debugPrint());
