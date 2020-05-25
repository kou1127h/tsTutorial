export {};
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return `roar`;
  }
}

class Tiger extends Animal {
  cry() {
    return `grrrr`;
  }
}

// クラスのなかに抽象メソッドで指定したやつがないのでエラーが出る
// class Tiger extends Animal{}
