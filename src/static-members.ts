export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'hayashi';
  static lastName: string = 'koichiro';
  static work() {
    return `mojimoji this is ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
