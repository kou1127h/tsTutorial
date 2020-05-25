export {};

// ここで型の制約をする
function double(value: number): number;
function double(value: string): string;

// 関数の実態では型制約しない
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  } else {
    // シグネチャーの定義で型が守ってくれてる
    // ここには来ない
    throw 'error';
  }
}

console.log(double(100));
console.log(double('go'));
