export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: number) {}
    }
  }
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('hayashi');
console.log(me.name);

const mike = new English.Person('hayashi', 'yo', 'rito');
console.log(mike);

const you = new Japanese.Tokyo.Person(123);
console.log(you.name);
