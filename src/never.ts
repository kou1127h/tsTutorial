export {};

// 呼びもとに戻ってこない
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型が値を持つこと基本的にない
// let bar: never = undefined;
