export {};

class Mahotsukai {}
class Souryo {}
// classは一個しか継承できない
class Taro extends Mahotsukai {}
// interfaceは多重継承みたいな実装ができる
interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log(`ionazun`);
  }
  kougeki(): void {
    console.log(`kougeki`);
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
