export {};

let name: any = 'Ham';
// こっち推奨
let length = (name as string).length;
// let length = (<string>name).length;

// length = `foo`;
