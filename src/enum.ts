export {};

// 数値をオーバーライドも出来る
enum Months {
  January,
  Feburary = 2,
  March,
  Aplil,
  May,
  June,
  July,
  August,
  September,
}

enum Months {
  // 追加代入は初期化いる
  // October

  //　けど値被りは別に良い
  October = 0,
}

Months.Feburary;
Months.Aplil;

console.log(Months.July);

// 同義
// const MonthsJs = {
//   January: 0,
//   Feburary: 1,
// };

enum Colors {
  // これは数値
  WHITE,
  RED = '#FF0000',
  BLACK = '#FFFFFF',
  // ここは初期化必要
  // YELLOW
}

console.log(Colors.RED);
console.log(Colors.WHITE);
