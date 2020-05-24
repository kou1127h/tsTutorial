export {};
// object でアノテーションすると中身まで指定できない
let profile1: object = { name: 'hayashi' };
profile1 = { birthYear: 1389 };

let profile2: {
  name: string;
} = { name: 'hayashi' };
profile2 = { name: '1389' };
