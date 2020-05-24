export {};

type ObjectType = {
  name: string;
  age: number;
};
let object: ObjectType = {
  name: 'hayashi',
  age: 24,
};

interface ObjectInterface {
  name: string;
  age: number;
}
let object2: ObjectInterface = {
  name: 'hayashi',
  age: 24,
};
