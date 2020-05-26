export {};

let name = `Kou`;

name = `Ham`;

let nickName = `Kou` as const;

// nickName = `hayashi`

const profile = {
  name: `hayashi`,
  height: 190,
} as const;

// as constがないとプロパティ変えられる
// profile.name = `kou`;
